import React from 'react';
import { Link } from 'react-router-dom';
import Sharepoint from '../images/sharepoint-logo.png';
import SONA from '../images/sona-logo.PNG';
import Qualtrics from '../images/qualtrics-logo.jpg';
import EPrime from '../images/E-Prime2-logo.jpg';
import BIOPAC from '../images/biopac-logo.png';
import styled from 'styled-components';
import { LinkIcon } from '../layout/Icons';
import { darkBlue, darkGrey, white, accent } from '../Styles';

const HomePage = styled.nav`
    padding: 1vh 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    color: ${darkBlue};
    min-height: 79vh;
`

const H2 = styled.h2`
    height: 15vh;
    line-height: 15vh;
    border-bottom: 1px solid ${darkGrey};
    margin-bottom: 1vh;
`

const Links = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr 20vh;
    text-align: center;
    margin: 3vh 5px;
    width: 235px;
    background: ${white};
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
    ul {
        border-bottom: 1px solid ${darkGrey};
        margin-bottom: 1vh;
    }
`

const Img = styled.img`
    height: 100%;
    width: 100%;
`


const Home = () => {
    return (
        <HomePage>
            <Links>
                <H2>Sharepoint</H2>
                <ul>
                    <li><Link to="/sharepoint-getting-started">Getting started</Link></li>
                    <li><Link to="/data-storage">Data storage</Link></li>
                    <li><Link to="/using-macros">Using macros</Link></li>
                </ul>
                <Img src={Sharepoint} alt="Sharepoint"/>
            </Links>
            <Links>
                <H2>SONA</H2>
                <ul>
                    <li><Link to="/sona-getting-started">Getting started</Link></li>
                    {/* <li>Batch grant credits</li> */}
                    <li><a href="https://cles-mrbs.exeter.ac.uk/mdc/day.php" target="_blank" rel="noopener noreferrer">Lab Booking <LinkIcon/></a></li>
                </ul>
                <Img src={SONA} alt="SONA"/>
            </Links>
            <Links>
                <H2>Qualtrics</H2>
                <ul>
                    <li><Link to="/qualtrics-getting-started">Getting started</Link></li>
                    <li><Link to="/qualtrics-export">Export data</Link></li>
                    <li><a href="https://www.qualtrics.com/support/survey-platform/my-projects/my-projects-overview/" target="_blank" rel="noopener noreferrer">Support pages <LinkIcon/></a></li>
                    <li><a href="https://exetercles.eu.qualtrics.com/jfe/form/SV_7aK3Ivy3A4i3A57" target="_blank" rel="noopener noreferrer">Live Survey <LinkIcon/></a></li>
                </ul>
                <Img src={Qualtrics} alt="Qualtrics"/>
            </Links>
            <Links>
                <H2>E-prime</H2>
                <ul>
                    <li><Link to="/eprime-testing">Testing</Link></li>
                    <li><Link to="/eprime-preprocess">Preprocessing</Link></li>
                    <li><a href="https://universityofexeteruk.sharepoint.com/sites/BA_Regulatory_Focus_and_Rumination/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBA%5FRegulatory%5FFocus%5Fand%5FRumination%2FShared%20Documents%2F2020%20documents%20and%20protocol%2FE%2DPrime%20scripts%2FEPrime2%2E0GettingStartedGuide%2Epdf&parent=%2Fsites%2FBA%5FRegulatory%5FFocus%5Fand%5FRumination%2FShared%20Documents%2F2020%20documents%20and%20protocol%2FE%2DPrime%20scripts" target="_blank" rel="noopener noreferrer">E-Prime guide <LinkIcon/></a></li>
                    <li><a href="https://support.pstnet.com/hc/en-us/categories/204686967-E-Prime" target="_blank" rel="noopener noreferrer">Support Pages <LinkIcon/></a></li>
                </ul>
                <Img src={EPrime} alt="E-Prime"/>
            </Links>
            <Links>
                <H2>Psychophys</H2>
                <ul>
                    <li><Link to="/psychophys-testing">Testing</Link></li>
                    <li className="dropdownHover">Preprocessing</li>
                    <ul className="dropdownContent">
                        <li><Link to="/psychophys-preprocess-p1">Part 1</Link></li>
                        <li><Link to="/psychophys-preprocess-p2">Part 2</Link></li>
                    </ul>
                    <li><a href="https://www.biopac.com/wp-content/uploads/acqknowledge-4-software-guide.pdf" target="_blank" rel="noopener noreferrer">AcqKnowledge guide <LinkIcon/></a></li>
                </ul>
                <Img src={BIOPAC} alt="BIOPAC"/>
            </Links>
        </HomePage>
    )
};

export default Home;
