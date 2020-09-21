import React from "react"
import Home from "../components/home/Home"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home/>
  </Layout>
)

export default IndexPage
