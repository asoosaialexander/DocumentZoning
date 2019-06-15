'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express()
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST');
    next();
});

app.get('/', (req, res) => {
    fs.readFile('./src/assets/document-details.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        res.send(student)
    });
});

app.post('/', (req, res) => {
    fs.writeFile('./src/assets/document-details.json', JSON.stringify(req.body), (err) => {
        console.log('File written to JSON.json');
        res.send('File written to JSON.json')
    })
});

app.listen(3000, () => {
    console.log('Listening on port 3000. Post a file to http://localhost:3000');
});