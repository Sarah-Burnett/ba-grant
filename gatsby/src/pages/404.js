import React from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <PageTransition>
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </PageTransition>
)

export default NotFoundPage
