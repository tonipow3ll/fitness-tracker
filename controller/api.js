const { response } = require('express');
const express = require('express');
const path = require('path');
const  Workout = require('../models/Workout');
const db = require('../models');
const router = express.Router();

// get route for all exercises
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
        .then((dbWorkouts) => {
            console.log(dbWorkouts)
            res.json(dbWorkouts)
        })
});
// get route for all workouts
router.get('/api/workouts', (req, res) => {
    
    Workout.find({})
        .then((dbWorkouts) => {
            console.log(dbWorkouts)
            res.json(dbWorkouts)
        })
})


router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    console.log(body.exercises)

    Workout.create(body).then((dbWorkout => {
        res.json(dbWorkout);
    })).catch(err => {
        res.json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $inc: { totalDuration: req.body.duration },
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});





// router.get('/exercise', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/exercise.html'));
// });
module.exports = router;