import React from "react"
import styled from "styled-components"
import * as s from "../../styles/variables"
import { useStaticQuery, graphql } from "gatsby"
import HomeLinks from "../home/HomeLinks"

const homeLinks = [
  {
    title: "SharePoint",
    img: "sharepoint-logo.png",
  },
  {
    title: "SONA",
    img: "sona-logo.PNG",
  },
  {
    title: "Qualtrics",
    img: "qualtrics-logo.jpg",
  },
  {
    title: "Eprime",
    img: "E-Prime2-logo.jpg",
  },
  {
    title: "Psychophys",
    img: "biopac-logo.png",
  },
]

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      pg {
        tutorials {
          slug
          title
          category
          name
        }
      }
    }
  `)
  return (
    <HomePage>
      {homeLinks.map(({ title, img }) => (
        <HomeLinks
          key={title}
          heading={title}
          links={data.pg.tutorials.filter(
            tutorial => tutorial.category === title
          )}
          image={{ filename: img, alt: "" }}
        />
      ))}
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
