const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Astros:gege0707@cluster0-zdofm.mongodb.net/semana09?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true
})

// GET, POST, PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (edição, criação)

app.use(express.json());
app.use(routes);

app.listen(3337);
