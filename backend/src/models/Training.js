const mongoose = require('mongoose');

const TraningScheema = new mongoose.Schema({
    dia: String,
    alunos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    horario: String
});

module.exports = mongoose.model('Training', TraningScheema);