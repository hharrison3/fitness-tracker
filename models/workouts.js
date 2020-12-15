const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// Build schema for workouts data
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Exercise type is required"
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name is required"
        },
        duration: {
          type: Number,
          required: "Exercise duration is required"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workouts = mongoose.model("Workout", workoutSchema);

module.exports = Workouts;
