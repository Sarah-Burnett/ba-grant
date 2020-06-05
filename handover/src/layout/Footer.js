import React from 'react';
import styled from 'styled-components';
import { lightBlue, tablet, darkBlue, Links } from '../Styles';
import { LinkIcon } from './Icons';

const FooterBar = styled.div`
    background: ${darkBlue};
    min-height: 10vh;
    color: ${lightBlue};
    padding: 1vh 1vw;
    @media (min-width: ${tablet}){
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    border-top: 1px solid grey;
`

const Footer = () => {
    return (
        <FooterBar>
            <Links>
                <li><a href="/">Tutorials</a></li>
                <li><a href="https://exetercles.eu.qualtrics.com/login" target="_blank" rel="noopener noreferrer">Qualtrics <LinkIcon/></a></li>
                <li><a href="https://exeter-psychology.sona-systems.com/" target="_blank" rel="noopener noreferrer">SONA <LinkIcon/></a></li>
                <li><a href="https://universityofexeteruk.sharepoint.com/sites/BA_Regulatory_Focus_and_Rumination" rel="noopener noreferrer" target="_blank">Sharepoint <LinkIcon/></a></li>
            </Links>
        </FooterBar>
    )
}

export default Footer;