import React from 'react';
import styled from 'styled-components';

const FootBar = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 20vh;
    background: #011934;
    color: #e5f1f8;
    margin-top: 10vh;
`
const Img = styled.div`
    height: 20vh;
    width: auto;
    img {
        height: 100%;
    }
`

const H2 = styled.h2`
    height: 20vh;
    line-height: 20vh;
`

const Links = styled.ul`
    padding: 1vh 0;
    li {
        list-style: none;
        margin: 0 1vw;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: #E5F1F8;
        &:hover {
            color: #95C5E2;
        }
    }
`


const Footer = () => {
    return (
        <FootBar>
            <Img><img src="https://exetercles.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0cEBafEeKfQXbM1" alt="logo"/></Img>
            <H2>Tutorials</H2>
            <Links>
                <li><h3>Sharepoint</h3></li>
                <li>Navigation</li>
            </Links>
            <Links>
                <li><h3>SONA</h3></li>
                <li>Getting started</li>
                <li>Batch credits</li>
            </Links>
            <Links>
                <li><h3>Qualtrics</h3></li>
                <li>Getting started</li>
                <li>Download data</li>
                <li>Support pages</li>
            </Links>
            <Links>
                <li><h3>E-prime</h3></li>
                <li>Collection</li>
                <li>Preprocessing</li>
                <li>MSci Seminar</li>
            </Links>
            <Links>
                <li><h3>Psychophys</h3></li>
                <li>Collection</li>
                <li>Preprocessing</li>
                <li>MSci Seminar</li>
            </Links>
        </FootBar>
    )
};

export default Footer;
