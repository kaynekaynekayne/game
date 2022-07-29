import axios from 'axios';
import { popularGames, upcomingGames, newGames } from '../api';

//Action Creator
export const loadGames=()=>async(dispatch)=>{
    //FETCH AXIOS
    const popularData=await axios.get(popularGames)
    const upcomingData=await axios.get(upcomingGames)
    const newGamesData=await axios.get(newGames)
    
    //https://api.rawg.io/games/2019-2020-20
    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular:popularData.data.results,
            upComing:upcomingData.data.results,
            newGames:newGamesData.data.results,
        }
    })
}