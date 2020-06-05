import React from 'react'
import { darkGrey, lightGrey, white } from '../Styles';
import styled from 'styled-components';
import Description from './Description';

const Text = styled.div`
    margin: 2vh 0;
    text-align: center;
    width: 100%;
    height: auto;
    padding: 2vh 2vw;
    background: ${white};
    li {
        text-align: left;
        line-height: 2;
        margin: 2vh 0;
        list-style: none;
    }
`

const Title = styled.h3`
    line-height: 2;
    padding-bottom: 2vw;
`

const Img = styled.img`
    max-width: 74vw;
`

const Slide = ({ slide }) => {
    return (
        <Text>
            <Title>{slide.name}</Title>
            { slide.image && <Img src={slide.image } alt="screenshot"/>}
            <Description desc={slide.description}/>
        </Text>
    )
}

export default Slide;
