import axios from 'axios';

const initialState={
    popular:[],
    newGames:[],
    upComing:[]
}

const gamesReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                popular:action.payload.popular,
                upcoming:action.payload.upcoming,
                newGames:action.payload.newGames,
            
            };
        default:
            return {...state}
    }
}

//action creator
const fetchGames=(userData)=>{
    // axios.get('rawg.io/games').then(
    //     return data;
    // )
    
    return{
        type:'FETCH_GAMES',
        payload:userData
    }
};

fetchGames({user:'name'})



export default gamesReducer;