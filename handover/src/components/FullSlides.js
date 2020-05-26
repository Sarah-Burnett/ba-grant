import React from 'react';
import { lightGrey } from '../Styles';
import styled from 'styled-components';
import Slide from './Slide';

const Container = styled.div`
    width: 80vw;
    margin: auto;
`


const FullSlides = ({json}) => {
    json.map( slide => console.log(slide))
    return (
        <Container>
                { json.map( slide => <Slide slide={slide} />)  }
           </Container>
    )
};

export default FullSlides;