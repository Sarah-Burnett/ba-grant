import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { lightBlue, darkBlue, accent, tablet } from '../Styles';
import { EllipsisIcon } from './Icons';
import { EllipsisMenu } from '../components/EllipsisMenu';

const NavBar = styled.nav`
    @media (max-width: ${tablet}){
        text-align: center;
        padding-bottom: 1vh;
    }
    @media (min-width: ${tablet}){
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 10vh;
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

const Ellipsis = styled.button`
    display: block;
    color: ${lightBlue};
    &:hover, &:focus {
        color: ${accent};
    }
    background: none;
    border: none;
    padding: 1vh 4vw;
    font-size: larger;
    outline: none;
    text-align: center;
    width: 100%;
    @media (min-width: ${tablet}) {
       width: auto;
    }
`


const Nav = () => {
    const [ showMenu, setShowMenu ] = useState(false);
    return (
        <Fragment>
            <NavBar>
            <Img><img src="https://exetercles.eu.qualtrics.com/ControlPanel/Graphic.php?IM=IM_0cEBafEeKfQXbM1" alt="logo"/></Img>
            <Title>BA Regulatory Focus and Rumination</Title>
            <Ellipsis onClick={() => setShowMenu(!showMenu)}><EllipsisIcon/></Ellipsis>
        </NavBar>
        { showMenu && <EllipsisMenu/> }
        </Fragment>
        
    )
};

export default Nav;
