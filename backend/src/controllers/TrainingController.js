const Training = require('../models/Training');

module.exports = {
    async store(req, res) {
        const { dia, alunos, horario } = req.body;


        training = await Training.create({ 
            dia,
            alunos,
            horario
        }).catch(err => {
            throw new Error(err);
        });
    

        return res.json(user);
    }
};