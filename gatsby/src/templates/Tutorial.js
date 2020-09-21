import React from "react"
import Layout from "../components/Layout"
import Slideshow from "../components/tutorial/slideshow/Slideshow"
import Tutorial from "../components/tutorial/Tutorial"

export default function TutorialTemplate({ pageContext: { tutorial } }) {
  return (
    <Layout>
      <Slideshow tutorial={tutorial}/>
    </Layout>
  )
}
