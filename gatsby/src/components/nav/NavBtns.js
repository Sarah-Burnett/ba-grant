import React from "react"
import { HomeIcon } from "../Icons"
import styled from "styled-components"
import * as s from "../../styles/variables"
import { A } from "../../styles/components"

export default function NavBtns() {
  return (
    <Buttons>
      <abbr>
        <A href="/" title="Home Page">
          <HomeIcon />
        </A>
      </abbr>
    </Buttons>
  )
}

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
