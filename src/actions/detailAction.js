import axios from "axios";
import {gameDetailsURL, SCREENSHOT_URL} from '../api';

const loadDetail=(id)=>async(dispatch)=>{
    
    const detailData=await axios.get(gameDetailsURL(id))
    const detailShots=await axios.get(SCREENSHOT_URL(id))
    dispatch({
        type:"GET_DETAIL",
        payload:{
            game: detailData.data,
            screen:detailShots.data,
        }
    })
}

export default loadDetail;