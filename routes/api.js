const router = require("express").Router();
const Workout = require("../models/workouts.js");
//route to create a workout in the database
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});
//route to update a current workout by id
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});
// route to get all workouts in database 
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});
//route to get a set of data in a range
router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(10)
    .then(result => {
      console.log(result)
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });
});
// route to delete all workouts by user
router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
