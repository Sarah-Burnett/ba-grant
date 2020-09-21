import React from "react"
import Layout from "../components/layout"

export default function TutorialTemplate({ pageContext: { tutorial } }) {
  return (
    <Layout>
      <h1>{tutorial.title}</h1>
      <p>{tutorial.slides}</p>
    </Layout>
  )
}
