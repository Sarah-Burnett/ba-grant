import React from "react"
import Home from "../components/home/Home"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import PageTransition from "gatsby-plugin-page-transitions"

const IndexPage = () => (
  <PageTransition>
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  </PageTransition>
)

export default IndexPage
