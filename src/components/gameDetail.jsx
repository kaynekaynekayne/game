import React from 'react';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const GameDetail = (props) => {

    const navigate=useNavigate();

    //exit detail
    const exitDetailHandler=(e)=>{
        const element=e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow="auto";
            navigate("/");
        }
    }
    const {game, screen, isLoading}=useSelector(state=>state.detail);
    
    return(
        <>
        {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail>
                    <Stats>
                        <div className="rating">
                            <h3>{game.name}</h3>
                            <p>Rating: {game.rating}</p>
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms && game.platforms.map(data=>(
                                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <img src={game.background_image} alt="image"/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen && screen.results.map(scr=>(
                            <img src={scr.image} key={scr.id} alt="game"/>
                        ))}
                    </div>
                </Detail>
            </CardShadow>
        )}
        </>
    )
};

const CardShadow=styled(motion.div)`    
    width:100%;
    min-height:100vh;
    overflow-y:scroll;
    overflow-x:hidden;
    background:rgba(0,0,0,0.5); 
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:pink;
    }
    &::-webkit-scrollbar-track{
        background:white;
    }
`;

const Detail=styled(motion.div)`
    width:70%;
    border-radius:1rem;
    padding:3rem;
    background:white;
    position:absolute;
    // left:5%;
    color:black;
    img{
        width:100%;
    }
`;

const Stats=styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const Info=styled(motion.div)`
    text-align:center;
`

const Platforms=styled(motion.div)`
    display:flex;
    justify-content:space-evenly;

    img{
        margin-left:3rem;
    }
`

const Media=styled(motion.div)`
    margin-top:5rem;
    img{
        width:100%;
        height:60vh;
        object-fit:cover;
    }
`

const Description=styled(motion.div)`
    margin:5rem;
`
export default GameDetail;