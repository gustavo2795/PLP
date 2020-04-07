const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.set('useFindAndModify', false);


const app = express();

mongoose.connect('mongodb+srv://plpgustavo:plpgustavo@cluster0-9t9rn.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology: true
})

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);