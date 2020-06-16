const mongoose = require('mongoose')

const locationShcema = new mongoose.Schema({
    location: {
        type: String
    },
    latitude: {
        type: Number
    }, 
    longitude: {
        type: Number
    }
},{
    timestamps: true
}) 

const location = mongoose.model('Location', locationShcema)

module.exports = location
