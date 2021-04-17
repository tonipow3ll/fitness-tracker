const { response } = require('express');
const express = require('express');
const path = require('path');
const { Workout } = require('../models/Workout');
const db = require('../models');
const router = express.Router();

// get route for all exercises
router.get('/exercise', (req, res) => {
    db.Workout.find({}, (err, workouts) => {
        try {
            res.json(Exercise)
        } catch (err) {
            res.json(err)
        }
    })
});
// get route for all workouts
router.get('/workout', (req, res) => {
    db.Workout.find({}, (err, workouts) => {
        try{
            res.json(Workout)
        } catch (err) {
            res.json(err)
        }
    })
})

router.post('/exercise', (req, res) => {
    db.Workout.insertOne({
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: rep.body.reps,
        sets: req.body.sets
    })
});

router.post('/workouts', (req, res) => {
    db.Workout.insertOne({
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: rep.body.reps,
        sets: req.body.sets
    })
});

router.put('/workouts', (req, res) => {
    db.Workout.insertOne({
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: rep.body.reps,
        sets: req.body.sets
    })
});

router.put('/exercise', (req, res) => {
    db.Workout.insertOne({
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: rep.body.reps,
        sets: req.body.sets
    })
});



// router.get('/exercise', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/exercise.html'));
// });
module.exports = router;