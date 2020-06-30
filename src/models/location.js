const mongoose = require('mongoose')
const User = require('./user')

const locationShcema = new mongoose.Schema({
    message: {
        type: String
    },
    latitude: {
        type: Number
    }, 
    longitude: {
        type: Number
    },
    from: {
        type: String,
    },
    sender: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'User'
    },
    receiver: {
        type: String,
        required: true,

    }
},{
    timestamps: true
}) 

const location = mongoose.model('Location', locationShcema)

module.exports = location
