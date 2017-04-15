'use strict'

const socket = require('socket.io')
const express = require('express')
const http = require('http')
const app = express()
const port = process.env.PORT || 5000;
const path = require('path');

const server = http.createServer(app)

var io = socket.listen(server);
//io.set('origins = *');

const mongoose = require('mongoose')
const bodyParser = require('body-parser');


// connection details
const config = require('./config.js')


// set to use es6 promises
mongoose.Promise = global.Promise


//controllers
const CounterCtrl = require('./controllers/counter.controller')


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


// connection to mongo lab 
mongoose.connect(config.queryString, (err) => {

    if (err) {
        console.log('error: There was an error connecting')
        return console.log(err)
    }

    server.listen(port, () => {
        console.log(`listening on ${port}`)
    })


    io.on('connection', (socket) => {
        console.log('connection...')

        // socket.emit('joiner');

        io.sockets.emit('joiner');


        socket.on('disconnect', () => {
            console.log(`disconnect...`)
        })

        // routes

        app.post('/api/update', (req, res) => {
            CounterCtrl.update(req, res, socket)
        })

        app.get('/api/getAll', (req, res) => {
            CounterCtrl.getAll(req, res)
        })

        app.get('/getById', (req, res) => {
            CounterCtrl.getById(req, res)
        })

        // All remaining requests return the React app, so it can handle routing.
        app.get('*', (request, response) => {
            response.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
        });


    })



})



// app.get('*', (req, res) => {
//     console.log('404')
// })