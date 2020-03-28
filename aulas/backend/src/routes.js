const express = require('express');
const OngController = require ('./controllers/OngController');
const IncidentController = require ('./controllers/IncidentController');
const ProfileController = require ('./controllers/ProfileController');
const SessionController = require ('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.listOng);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.listIncident);
routes.delete('/incidents/:id', IncidentController.deleteIncidentById);

routes.get('/profile', ProfileController.list);

module.exports = routes;
