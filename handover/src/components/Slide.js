import React from 'react'
import { darkGrey, lightGrey, white } from '../Styles';
import styled from 'styled-components';
import Description from './Description';

const Text = styled.div`
    margin: 2vh 0;
    width: 100%;
    height: auto;
    padding: 2vh 2vw;
    background: ${white};
    li {
        line-height: 2;
        margin-bottom: 2vh;
        list-style: none;
    }
`

const Title = styled.h3`
    line-height: 2;
    padding-bottom: 2vw;
    text-align: center;
`

const Img = styled.div`
    height: 90vh;
    min-width: 50vw;
    overflow-y: scroll;
    img {
        width: 100%;
    }
`

const Slide = ({ slide }) => {
    return (
        <Text>
            <Title>{slide.name}</Title>
            { slide.image && <img src={slide.image } alt="screenshot"/>}
            <Description desc={slide.description}/>
        </Text>
    )
}

export default Slide;
