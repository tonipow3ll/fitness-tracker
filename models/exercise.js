const mongoose = require('mongoose');

const ExcerciseSchema = new mongoose.Schema({
    // day: {
    //     type: Date,
    //     default: Date.now
    // }, 

    type: {
        type: String,
    },
    name: {
        type: String,
    }, 
    duration: {
        type: Number,
    }, 
    weight: {
        type: Number,
    }, 
    reps: {
        type: Number,
    }, 
    sets: {
        type: Number
    }

})