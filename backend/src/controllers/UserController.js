const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 864000
  });
};

module.exports = {

  //CREATE
  async store(req, res) {
    const { email, password, nome, presenca, pontos, tipo, foto_url } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ 
        email, 
        password, 
        nome, 
        presenca, 
        pontos, 
        tipo, 
        foto_url 
      }).catch(err => {
        throw new Error(err);
    });
    }else {

      return res.status(400).send({error: 'User already exists'});

    }

    return res.send({
      user,
      token: generateToken({id: user.id})
    });
  },

  //AUTHENTICATE
  async authenticate(req, res) {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user){
      return res.status(400).send({error: 'User not Found'});
    }

    if(!await bcrypt.compare(password, user.password)){
      return res.status(400).send({error: 'Invalid Password'});
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: 864000
    });

    res.send({ 
      user, 
      token: generateToken({id: user.id}) 
    });

  },

  //LIST ALL USERS
  async index(req, res) {
    const users = await User.find({});

    return res.json(users);
  },

  //RANKING
  async ranking(req, res) {
    const users = await User.find({}).sort([['pontos', -1]]);

    return res.json(users);
  },

  //EDIT USER
  async update(req, res) {
    
    try {
      let user = await User.findById(req.params.id).exec();
      user.set(req.body);
      let result = await user.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
    
  },

  //DELETE USER
  async delete(req, res) {

    try{
      let user = await User.findByIdAndDelete({_id: req.params.id}).exec();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};