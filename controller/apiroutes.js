const { response } = require('express');
const express = require('express');
const path = require('path');
const { Exercise } = require('../models');
// const exercise = require('../models/Exercise');
// const workout = require('../models/Workout');
const db = require('../models');
const router = express.Router();

router.get('/api/exercise', (req, res) => {
    db.Workout.find({}, (err, workouts) => {
        try {
            res.json(Exercise)
        } catch (err) {
            res.json(err)
        }
    })
})
// router.get('/exercise', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/exercise.html'));
// });
module.exports = router;