import React from 'react';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const GameDetail = (props) => {

    const {game, screen}=useSelector(state=>state.detail);
    
    return(
        <div className="card-shadow">
            <div className="detail">
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                        <div className='info'>
                            <h3>Platforms</h3>
                            <div className="platforms">
                                {game.platforms && game.platforms.map(data=>(
                                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt="image"/>
                </div>
                <div className="gallery">
                    {screen && screen.results.map(scr=>(
                        <img src={scr.image} key={scr.id} alt="game"/>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default GameDetail;