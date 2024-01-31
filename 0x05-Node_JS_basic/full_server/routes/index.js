const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const app = express();

app.get('/', (req, res) => {
    AppController.getHomepage(req, res);
});

app.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res);
});

module.exports = app;