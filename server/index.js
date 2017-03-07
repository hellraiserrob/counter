'use strict'

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


// connection details
const config = require('./config.js')


// set to use es6 promises
mongoose.Promise = global.Promise

// connection to mongo lab 
mongoose.connect(config.queryString, (err) => {

    if (err) {
        console.log('error: There was an error connecting')
        return console.log(err)
    }

    app.listen(3001, () => {
        console.log('listening on 3001')
    })

})

//controllers
const CounterCtrl = require('./controllers/counter.controller')


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// routes

app.get('/', (req, res) => {
    CounterCtrl.getAll(req, res)
})

app.get('/id', (req, res) => {
    CounterCtrl.getById(req, res)
})


app.post('/update', (req, res) => {
    CounterCtrl.update(req, res)
})
