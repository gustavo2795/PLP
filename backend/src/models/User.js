const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  nome: String,
  presenca: Boolean,
  pontos: Number,
  tipo: String,
  foto_url: String,
  
});

UserSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
})

module.exports = mongoose.model('User', UserSchema);