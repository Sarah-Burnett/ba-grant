import React from "react"
import styled from "styled-components"
import * as s from "../../styles/variables"
import { A } from "../../styles/components"
import Checkbox from "./Checkbox"

export default function HomeLinks({ heading, image, links }) {
  return (
    <Links>
      <h2>{heading}</h2>
      <img src={`./logos/${image.filename}`} alt={image.alt} />
      <ul>
        {links.map(({ name, slug, title }) => (
          <li key={title}>
            <A darker href={`/${slug}`}>
              {title}
            </A>
            <Checkbox name={name} />
          </li>
        ))}
      </ul>
    </Links>
  )
}

const Links = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 30vh 1fr;
  text-align: center;
  background: ${s.white};
  h2 {
    height: 10vh;
    line-height: 10vh;
    margin-bottom: 1vh;
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2vh 4vw;
    @media (min-width: ${s.tablet}) {
      margin: 2vh 1vw;
    }
  }
  a {
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    line-height: 250%;
    @media (min-width: ${s.tablet}) {
      line-height: auto;
    }
  }
  ul {
    margin-bottom: 1vh;
    text-align: left;
  }
  img {
    max-width: 100%;
    max-width: 100%;
  }
  border: 0.5px solid ${s.lightGrey};
  border-radius: 1px;
`
