'use strict'

const socket = require('socket.io')
const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

var io = socket.listen(server);
io.set('origins = *');

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

    server.listen(3001, () => {
        console.log('listening on 3001')
    })


    io.on('connection', (socket) => {
        console.log('connection...')

        socket.on('hello', (name) => {
            console.log(`hello...${name}`)
        })

        socket.on('disconnect', () => {
            console.log(`disconnect...`)
        })
    })

    

})

//controllers
const CounterCtrl = require('./controllers/counter.controller')


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// routes

app.get('/api/getAll', (req, res) => {
    CounterCtrl.getAll(req, res)
})

app.get('/getById', (req, res) => {
    CounterCtrl.getById(req, res)
})


app.post('/api/update', (req, res) => {
    CounterCtrl.update(req, res)
})

// app.get('*', (req, res) => {
//     console.log('404')
// })

