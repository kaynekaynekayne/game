import React, { useEffect, useState } from 'react';
import WorkoutDetail from '../components/WorkoutDetail';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutContext } from '../hooks/useWorkoutContext';
import { getEvents } from '../api/event';

const Home = (props) => {
    // const [workouts, setWorkouts]=useState(null);
    const {workouts, dispatch}=useWorkoutContext();
    
    useEffect(()=>{
        getAllEvents();
    },[]);

    const getAllEvents=async()=>{
        try{
            const response=await getEvents();
            console.log(response);
        }catch(e){
            console.log(e.message)
        }
    }

    useEffect(()=>{
        const fetchWorkout=async()=>{
            const response=await fetch(`http://localhost:4014/api/workout`)
            const json=await response.json();

            if(response.ok){
                // setWorkouts(json);
                dispatch({type:'SET_WORKOUTS', payload:json})
            }
        };

        fetchWorkout();
    },[dispatch]);
    
    return(
        <div className='home'>
            <div className="workout">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetail 
                        key={workout._id}
                        workout={workout}    
                    />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
};

export default Home;