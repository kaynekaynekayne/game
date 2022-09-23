import express from 'express';
import { getWorkouts, getWorkout,create, deleteWorkout, update } from '../controllers/workoutController.js';
import Workout from '../models/Workout.js';

const router=express.Router();

//get all workouts
router.get("/", getWorkouts);

//get a single workout
router.get("/:id", getWorkout)

//post a new workout
router.post("/", create)

//delete a workout
router.delete("/:id", deleteWorkout)

//update a workout
router.patch("/:id", update)

router.get("/getEvents",getEvents);

export default router;