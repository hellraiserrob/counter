const Counter = require('../models/counter.model')


const getCount = (req, res) => {

    var id = '58bdccb9f36d2837b8112f06'

    // Counter.findById(id)

    Counter.find()
    .then((err, response) => {

        console.log(response, err)

        if (err) {
            res.send(err)
        }

        res.send(response)
    })

}


module.exports = {
    getCount
}