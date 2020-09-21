import React from "react"
import { darkGrey, tablet } from "../../../styles/variables"
import styled from "styled-components"
import Slide from "./Slide"
import { RedirectButton } from "../RedirectButton"

export default function FullSlides({ tutorial, tutorial: { slides, title } }) {
  const slideProp = {
    tutorial,
    name: tutorial.name,
    title: tutorial.title,
    category: tutorial.category,
    redirect: tutorial.redirect,
  }
  return (
    <Container>
      <H1>{title}</H1>
      {slides.map(slide => (
        <Slide key={slide.name} slide={slide} title={title} />
      ))}
      <RedirectButton slideProp={slideProp} />
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  margin: auto;
  @media (min-width: ${tablet}) {
    width: 75vw;
  }
`

const H1 = styled.h1`
  text-align: center;
  border-bottom: 1px solid ${darkGrey};
  margin-bottom: 2vh;
  padding: 2vh 0;
`
