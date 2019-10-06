const express = require('express');
const SessionController = require('/.controller/SessionController');

const routes = express.Router();

// req.query = acessar query params (para filtro)
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisicao (para criacao, edicao)


routes.post('/users', SessionController.store);

module.exports = routes;
