import React, { useState } from 'react';
import styled from 'styled-components';
import { darkBlue, darkGrey, white, accent, tablet, desktop } from '../Styles';
import { Checkbox } from '../components/links/Checkbox';

const H2 = styled.h2`
    height: 10vh;
    line-height: 10vh;
    border-bottom: 1px solid ${darkGrey};
    margin-bottom: 1vh;
`

const Img = styled.img`
    height: 100%;
    max-width: 100%;
    margin: auto;
    padding-bottom: 1vh;
    transition: opacity 1s;
`

const HomeLinks = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr 20vh;
    text-align: center;
    background: ${white};
    li {
        list-style: none;
        margin: 2vh 1vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    a {
        font-size: inherit;
        line-height: inherit;
        text-decoration: none;
        color: ${darkBlue};
        &:hover {
            color: ${accent};
        }
        line-height: 250%;
        @media (min-width: ${tablet}){
            line-height: auto;
        }
    }
    ul {
        border-bottom: 1px solid ${darkGrey};
        margin-bottom: 1vh;
        text-align: left;
    }
`

export const Links = ({name, links, image}) => {
    return (
        <HomeLinks>
            <H2>{name}</H2>
            <ul>
                { links.map(link => <li key={link.name}>
                    <link.Component name={link.name} url={link.url} state={link.state}/>
                    <Checkbox state={link.state}/>
                    </li>
                    ) }
            </ul>
            <Img src={image} alt={image}/>
        </HomeLinks>
    )
};