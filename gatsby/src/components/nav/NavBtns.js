import React from "react"
import { HomeIcon, UserIcon, ListIcon } from "../Icons"
import styled from "styled-components"
import * as s from "../../styles/variables"
import { A } from "../../styles/components"

const Buttons = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 12vw;
  abbr {
    margin: 1vw;
    font-size: 22px;
    min-width: 31%;
    &:hover {
      color: ${s.accent};
    }
    cursor: pointer;
  }
  a {
    font-size: inherit;
  }
  @media (min-width: ${s.tablet}) {
    min-width: auto;
    padding-right: 3vw;
  }
`

const NavBtns = ({
  menuProp: { toggleMobNav },
  slideshowProp: { changeView },
}) => {
  return (
    <Buttons>
      <abbr>
        <A href="/" title="Home Page">
          <HomeIcon />
        </A>
      </abbr>
      <abbr onClick={changeView} title="Toggle slideshow">
        <ListIcon />
      </abbr>
      <abbr onClick={toggleMobNav} title="User menu">
        <UserIcon />
      </abbr>
    </Buttons>
  )
}

export default NavBtns
