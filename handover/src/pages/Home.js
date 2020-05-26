import React from 'react';
import { Link } from 'react-router-dom';
import Sharepoint from '../images/sharepoint-logo.png';
import SONA from '../images/sona-logo.PNG';
import Qualtrics from '../images/qualtrics-logo.jpg';
import EPrime from '../images/E-Prime2-logo.jpg';
import BIOPAC from '../images/biopac-logo.png';
import styled from 'styled-components';
import { darkBlue, darkGrey, white, accent } from '../Styles';

const HomePage = styled.nav`
    padding: 1vh 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    min-height: 90vh;
    color: ${darkBlue};
`

const H2 = styled.h2`
    height: 15vh;
    line-height: 15vh;
    border-bottom: 1px solid ${darkGrey};
    margin-bottom: 1vh;
`

const Links = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr 20vh;
    text-align: center;
    padding: 3vh 1vw;
    margin: 3vh 0 ;
    width: 250px;
    background: ${white};
    box-shadow: 0px 0px 10px 5px ${darkBlue};
    li {
        list-style: none;
        margin: 2vh 1vw;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: ${darkBlue};
        &:hover {
            color: ${accent};
        }
    }
`

const Img = styled.img`
    border-top: 1px solid ${darkGrey};
    padding-top: 1vh;
    height: 100%;
    width: 100%;
`


const Home = () => {
    return (
        <HomePage>
            <Links>
                <H2>Sharepoint</H2>
                <ul>
                    <li><Link to="/sharepoint-getting-started">Navigation</Link></li>
                </ul>
                <Img src={Sharepoint} alt="Sharepoint"/>
            </Links>
            <Links>
                <H2>SONA</H2>
                <ul>
                    <li><Link to="/sona-getting-started">Getting started</Link></li>
                    <li>Batch credits</li>
                </ul>
                <Img src={SONA} alt="SONA"/>
            </Links>
            <Links>
                <H2>Qualtrics</H2>
                <ul>
                    <li><Link to="/qualtrics-getting-started">Getting started</Link></li>
                    <li><Link to="/qualtrics-export">Export data</Link></li>
                    <li><a href="https://www.qualtrics.com/support/survey-platform/my-projects/my-projects-overview/" target="_blank" rel="noopener noreferrer">Support pages</a></li>
                    <li><a href="https://exetercles.eu.qualtrics.com/jfe/form/SV_7aK3Ivy3A4i3A57" target="_blank" rel="noopener noreferrer">Live Survey</a></li>
                </ul>
                <Img src={Qualtrics} alt="Qualtrics"/>
            </Links>
            <Links>
                <H2>E-prime</H2>
                <ul>
                    <li>Collection</li>
                    <li>Preprocessing</li>
                    <li>MSci Seminar</li>
                </ul>
                <Img src={EPrime} alt="E-Prime"/>
            </Links>
            <Links>
                <H2>Psychophys</H2>
                <ul>
                    <li>AcqKnowledge</li>
                    <li>Collection</li>
                    <li><Link to="/psychophys-preprocess">Preprocessing</Link></li>
                    <li>MSci Seminar</li>
                </ul>
                <Img src={BIOPAC} alt="BIOPAC"/>
            </Links>
        </HomePage>
    )
};

export default Home;
