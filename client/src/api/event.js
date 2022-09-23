import axios from "axios";

export const getEvents=async()=>{
    try{
        const response=await fetch('http://localhost:4014/api/workout/getEvents'
        // ,
        // {
        //     params:{
        //         cpage:1,
        //         rows:8,
        //         prfstate:'02',
        //     }
        // }
        )
        return response;
    }catch(e){
        console.log(e)
    }
};
