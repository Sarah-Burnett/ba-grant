import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {accent, Button, PrimaryButton } from '../../Styles';
import SlidesContext from '../../context/slides/slidesContext';

const Container = styled.div`
    padding: 2vh 1vw;
    width: 100%;
`



const Buttons = () => {
    const slidesContext = useContext(SlidesContext);
    const { viewFullSlides, redirectMsg, redirectUrl, nextSlide, prevSlide, end, start, json, currentIndex } = slidesContext; 
    return (
        <Container>
                { end && <Link to={redirectUrl}><Button className="previous" type="button">{redirectMsg}</Button></Link>}
                { !end && <PrimaryButton className="next" type="button" onClick={() => nextSlide(json, currentIndex)}>Next</PrimaryButton> }
                { !start && <Button className="previous" type="button" onClick={() => prevSlide(json, currentIndex)}>Previous</Button> }
                <Button onClick={viewFullSlides}>View Full Slides</Button>
        </Container>
    )
}

export default Buttons;