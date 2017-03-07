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

const update = (req, res) => {


    var id = '58bdd2ecf36d2837b8113463'
    var value = parseInt(req.body.value)

    Counter.findOneAndUpdate({
        _id: id
    }, {
        value: value
    }, function(err, response){

        if (err) {
            res.send(err)
        }

        res.send(response)
    })

}


module.exports = {
    getAll,
    getById,
    update
}