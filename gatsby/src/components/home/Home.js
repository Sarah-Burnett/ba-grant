import React from "react"
import styled from "styled-components"
import * as s from "../../styles/variables"
import { useStaticQuery, graphql } from "gatsby"
import HomeLinks from "../home/HomeLinks"

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      pg {
        tutorials {
          slug
          title
          category
        }
      }
    }
  `)
  return (
    <HomePage>
      <HomeLinks
        name="Sharepoint"
        links={data.pg.tutorials.filter(
          tutorial => tutorial.category === "Sharepoint"
        )}
        image={{filename:"sharepoint-logo.png", alt:""}}
      />
    </HomePage>
  )
}

const HomePage = styled.div`
  padding: 1vh 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-gap: 1rem;
  color: ${s.darkBlue};
  margin: 1rem;
  min-height: 79vh;
  height: auto;
`
