import React from 'react';
import styled from 'styled-components';
import { lightBlue, darkBlue, accent } from '../Styles';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 10vh;
    background: ${darkBlue};
    color: ${lightBlue};
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
`

const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    li {
        list-style: none;
        margin: 2vh 2vw;
    }
    a {
        font-weight: bold;
        text-decoration: none;
        color: ${lightBlue};
        &:hover {
            color: ${accent};
        }
    }
`


const Nav = () => {
    return (
        <NavBar>
            <Img><img src="https://exetercles.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0cEBafEeKfQXbM1" alt="logo"/></Img>
            <Title>BA Regulatory Focus and Rumination</Title>
            <NavLinks>
                <li><a href="http://localhost:3000">Home</a></li>
                <li><a href="https://exetercles.eu.qualtrics.com/login" target="_blank" rel="noopener noreferrer">Qualtrics</a></li>
                <li><a href="https://exeter-psychology.sona-systems.com/" target="_blank" rel="noopener noreferrer">SONA</a></li>
                <li><a href="https://universityofexeteruk.sharepoint.com/sites/BA_Regulatory_Focus_and_Rumination" rel="noopener noreferrer" target="_blank">Sharepoint</a></li>
            </NavLinks>
        </NavBar>
    )
};

export default Nav;
