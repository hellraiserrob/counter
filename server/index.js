'use strict'

const express = require('express')
const app = express()
const mongoose = require('mongoose')

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


// routes

app.get('/', (req, res) => {

    console.log('get route');

    CounterCtrl.getCount(req, res)
})
