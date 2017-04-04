const Counter = require('../models/counter.model')


const getAll = (req, res) => {

    Counter.find()
    .then((err, response) => {

        if (err) {
            res.send(err)
        }

        res.send(response)
    })

}

const getById = (req, res) => {

    var id = '58bdd2ecf36d2837b8113463'

    Counter.findById(id)
    .then((err, response) => {

        if (err) {
            res.send(err)
        }

        res.send(response)
    })

}

const update = (req, res, socket) => {

    var id = req.body._id
    var value = parseInt(req.body.value)
    var options = {
         new: true
    }

    Counter.findOneAndUpdate({
        _id: id
    }, {
        value: value
    }, options, function(err, response){

        if (err) {
            res.send(err)
        }

        res.send(response)
        // io.sockets.emit('action', {type:'UPDATE', payload: response});
        socket.broadcast.emit('action', {type:'UPDATE', payload: response});
    })

}


module.exports = {
    getAll,
    getById,
    update
}