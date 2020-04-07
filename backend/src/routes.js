const express = require('express');
const UserController = require('./controllers/UserController');
const TrainingController = require('./controllers/TrainingController');

const routes = express.Router();

//create User
routes.post('/users', UserController.store);

//list all users
routes.get('/users', UserController.index);

//update one user
routes.put('/users/:id', UserController.update);

//delete user
routes.delete('/users/:id', UserController.delete);

//authenticate user
routes.post('/authenticate', UserController.authenticate);

//Ranking users
routes.get('/users/ranking', UserController.ranking);

//create Training
routes.post('/training', TrainingController.store);



module.exports = routes;