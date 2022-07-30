import React from 'react';
import styled from 'styled-components'; 
import {motion} from 'framer-motion';

import { useSelector, useDispatch } from 'react-redux';
import loadDetail from '../actions/detailAction'

const Game = ({name, released, image, id}) => {

    const dispatch=useDispatch();
    const dd=useSelector(state=>state.detail.game);
    
    const loadDetailHander=()=>{
        console.log(dd)
        dispatch(loadDetail(id));
    };

    return(
        <StyledGame onClick={loadDetailHander}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGame>
    )
};

const StyledGame=styled(motion.div)`
    min-height:30vh;
    box-shadow:0px 5px 20px rgba(0,0,0,0.1);
    text-align:center;
    border-radius:1rem;
    img{
        width:100%;
        height:40vh;
        object-fit:cover;
    }
    cursor:pointer;
`

export default Game;