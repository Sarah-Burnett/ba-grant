import React from 'react';
import { lightGrey, darkGrey, Button } from '../Styles';
import styled from 'styled-components';
import Slide from './Slide';

const Container = styled.div`
    width: 80vw;
    margin: auto;
`

const H1 = styled.h1`
    text-align: center;
    border-bottom: 1px solid ${darkGrey};
    margin-bottom: 2vh;
    padding: 2vh 0;
`


const FullSlides = ({json, title}) => {
    return (
        <Container>
                <H1>{title}</H1>
                { json.map( slide => <Slide slide={slide} />)  }
        </Container>
    )
};

export default FullSlides;