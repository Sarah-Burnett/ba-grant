import React, { useState } from "react"
import styled from "styled-components"
import * as s from "../../styles/variables"
import NavBtns from "./NavBtns"
import Logo from "../../images/BrainHeartRate.jpg"

export default function Nav({ slideshowProp }) {
  return (
    <>
      <NavBar>
        <Img>
          <img src={Logo} alt="BA Grant" />
        </Img>
        <Title>BA Regulatory Focus and Rumination</Title>
        <NavBtns />
      </NavBar>
    </>
  )
}

const NavBar = styled.nav`
  @media (max-width: ${s.tablet}) {
    text-align: center;
    padding-bottom: 1vh;
  }
  @media (min-width: ${s.tablet}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 10vh;
  }
  min-height: 10vh;
  background: ${s.darkBlue};
  color: ${s.lightBlue};
`
const Img = styled.div`
  height: 10vh;
  img {
    height: 10vh;
    width: auto;
  }
`

const Title = styled.h1`
  margin: auto;
  padding: 1vh 0;
`