import React from "react"
import styled from "styled-components"
import { Button, PrimaryButton } from "../../../styles/components"
import { RedirectButton } from "../RedirectButton"

export default function Buttons({
  slideProp,
  slideProp: { nextSlide, prevSlide, isFirstSlide, isFinalSlide },
}) {
  return (
    <Container>
      {isFinalSlide ? (
        <RedirectButton slideProp={slideProp}/>
      ) : (
        <PrimaryButton className="next" type="button" onClick={nextSlide}>
          Next
        </PrimaryButton>
      )}
      {!isFirstSlide && (
        <Button className="previous" type="button" onClick={prevSlide}>
          Previous
        </Button>
      )}
    </Container>
  )
}

const Container = styled.div`
  padding: 2vh 1vw;
  width: 100%;
`
