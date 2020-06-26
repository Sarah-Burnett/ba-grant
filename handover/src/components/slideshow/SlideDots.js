import React, {useContext} from 'react';
import styled from 'styled-components';
import { darkGrey, darkBlue } from '../../Styles';
import SlidesContext from '../../context/slides/slidesContext';

const Dots = styled.div`
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    margin: 1vh 0 3vh;
`
const Dot = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: ${darkGrey};
    margin: 0 1vw;
`

const ActiveDot = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: ${darkBlue};
    margin: 0 1vw;
`

const SlideDots = () => {
    const slidesContext = useContext(SlidesContext);
    const { json, currentIndex } = slidesContext;
    return (
        <Dots className="dots">
            { json.map( (item, index) => index === currentIndex ? <ActiveDot key={index}/> : <Dot key={index}/>  ) }
        </Dots>
    )
};

export default SlideDots;
