import React from "react"
import * as s from "../../../styles/variables"
import styled from "styled-components"
import Slide from "./Slide"
import { RedirectButton } from "../RedirectButton"
import { Button } from "../../../styles/components"

export default function FullSlides({
  slideProp,
  slideProp: { slides, title, category, changeView },
}) {
  return (
    <Container>
      <H1>{title}</H1>
      {slides.map(slide => (
        <Slide
          key={slide.name}
          slide={slide}
          title={title}
          category={category}
        />
      ))}
      <RedirectButton slideProp={slideProp} />
      <Button onClick={changeView}>View As Slideshow</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  margin: auto;
  @media (min-width: ${s.tablet}) {
    width: 75vw;
  }
`

const H1 = styled.h1`
  text-align: center;
  border-bottom: 1px solid ${s.darkGrey};
  margin-bottom: 2vh;
  padding: 2vh 0;
`
