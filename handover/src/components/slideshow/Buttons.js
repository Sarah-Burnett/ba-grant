import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {Button, PrimaryButton } from '../../Styles';
import { RedirectButton } from '../RedirectButton';
import SlidesContext from '../../context/slides/slidesContext';

const Container = styled.div`
    padding: 2vh 1vw;
    width: 100%;
`

const Buttons = () => {
    const slidesContext = useContext(SlidesContext);
    const { nextSlide, prevSlide, end, start, json, currentIndex } = slidesContext; 
    return (
        <Container>
                { end && <RedirectButton/>}
                { !end && <PrimaryButton className="next" type="button" onClick={() => nextSlide(json, currentIndex)}>Next</PrimaryButton> }
                { !start && <Button className="previous" type="button" onClick={() => prevSlide(json, currentIndex)}>Previous</Button> }
        </Container>
    )
}

export default Buttons;