import React from "react"
import { white } from "../../../styles/variables"
import styled from "styled-components"
import Description from "./Description"
import Image from "../../Image"

export default function Slide({
  slide: { name, image, description },
  title,
  category,
}) {
  return (
    <Text>
      <Title>{name && name !== title && name}</Title>
      {image && (
        <Image filename={category.toLowerCase() + "/" + image} alt={name} />
      )}
      <Description desc={description} />
    </Text>
  )
}

const Text = styled.div`
  margin: 2vh 0;
  text-align: center;
  width: 100%;
  height: auto;
  padding: 2vh 2vw;
  background: ${white};
  li {
    text-align: left;
    line-height: 2;
    margin: 2vh 0;
    list-style: none;
  }
`

const Title = styled.h3`
  line-height: 2;
  padding-bottom: 2vw;
`

const Img = styled.img`
  max-width: 70vw;
`
