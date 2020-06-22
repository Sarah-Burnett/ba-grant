import React from 'react';
import styled from 'styled-components';
import { lightBlue, darkBlue, Links, tablet } from '../Styles';
import { HomeIcon } from './Icons';

const NavBar = styled.nav`
    @media (max-width: ${tablet}){
        text-align: center;
        padding-bottom: 1vh;
    }
    @media (min-width: ${tablet}){
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    min-height: 10vh;
    background: ${darkBlue};
    color: ${lightBlue};
    border-bottom: 1px solid grey;
    .home {
        font-size: 200%;
        @media (min-width: ${tablet}) {
            font-size: 125%
        }
    }
`
const Img = styled.div`
    height: 10vh;
    img {
        height: 100%;
        width: auto;
    }
`

const Title = styled.h1`
    margin: auto;
    padding: 1vh 0;
`

const Nav = () => {
    return (
        <NavBar>
            <Img><img src="https://exetercles.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0cEBafEeKfQXbM1" alt="logo"/></Img>
            <Title>BA Regulatory Focus and Rumination</Title>
            <Links>
                <li><a href="/"><HomeIcon/></a></li>
            </Links>
        </NavBar>
    )
};

export default Nav;
