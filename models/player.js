const moongoose = require('mongoose');

const playerSchema = new moongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
})

module.exports = moongoose.model('Player', playerSchema);