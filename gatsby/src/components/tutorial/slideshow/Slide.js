import React from "react"
import styled from "styled-components"
import { darkGrey, white, desktop } from "../../../styles/variables"
import Buttons from "./Buttons"
import SlideDots from "./SlideDots"
import Image from "../../Image"

export default function Slide({
  slideProp,
  slideProp: {
    title,
    category,
    currentSlide: { name, description, image },
  },
}) {
  return (
    <Container className="slide">
      <Text>
        <H1>{title}</H1>
        <Title>{name && name !== title && name}</Title>
        <div>
          {description && description.map(item => <p key={item}>{item}</p>)}
        </div>
        <SlideDots slideProp={slideProp} />
        <Buttons slideProp={slideProp} />
      </Text>
      <Img>
        {image && (
          <Image filename={category.toLowerCase() + "/" + image} alt={name} />
        )}
      </Img>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 92vh;
  margin: auto;
  padding: 1vh 1vw;
  background: ${white};
  @media (min-width: ${desktop}) {
    display: flex;
    height: 90vh;
    padding: 0;
  }
  transition: opacity 0.5s;
`

const Text = styled.div`
  background: ${white};
  width: 100%;
  padding: 2vh 4vw;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 1;
  p {
    line-height: 2;
    margin-bottom: 2vh;
    width: 100%;
    padding: 0 1vw;
  }
  @media (min-width: ${desktop}) {
    flex: 1;
    padding: 2vh 1vw;
    margin: 0;
    overflow-y: scroll;
    height: 90vh;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    p,
    h1,
    h3,
    div {
      max-width: 50vw;
    }
  }
`

const H1 = styled.h1`
  text-align: center;
  border-bottom: 1px solid ${darkGrey};
  margin-bottom: 2vh;
  padding: 2vh 0;
`

const Title = styled.h3`
  line-height: 2;
  padding-bottom: 2vw;
  text-align: center;
`

const Img = styled.div`
  img {
    max-width: 100%;
  }
  @media (min-width: ${desktop}) {
    flex: 1;
    overflow-y: scroll;
    height: 90vh;
    padding: 1vh 0;
  }
`
