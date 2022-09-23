import Workout from "../models/Workout.js";
import mongoose from "mongoose";


export const getEvents=async(req,res)=>{
    try{
        console.log("req");
        return res.json({message:"성공적"})
    }catch(err){
        console.log(err);
    }
};

//get all workouts
export const getWorkouts=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
}

//get a single workout
export const getWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workout=await Workout.findById(id);
    
    if(!workout){
        return res.status(404).json({error:'No such workout'});
    }

    res.status(200).json(workout);
}

//create new workout
export const create=async(req,res)=>{
    const {title, load, reps}=req.body;

    let emptyFields=[];

    if(!title){
        emptyFields.push('title');
    }
    if(!load){
        emptyFields.push('load');
    }
    if(!reps){
        emptyFields.push('reps');
    }
    if(emptyFields.length>0){
        return res.status(400).json({error:'please fill in all the fields', emptyFields})
    }

    try {
        const workout=await Workout.create({
            title,
            load,
            reps
        });
        res.status(200).json(workout);
    } catch(err){
        res.status(400).json({error:error.message});
    }  
}


//delete a workout
export const deleteWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(workout);
}

//update a workout
export const update=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error:"no such workout"})
    }

    res.status(200).json(workout);
}