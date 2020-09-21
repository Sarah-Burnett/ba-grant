import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Image({ filename, alt }) {
  const data = useStaticQuery(graphql`
    {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const image = data.images.edges.find(n =>
    n.node.relativePath.includes(filename)
  )
  if (!image) return null
  const fluid = image.node.childImageSharp.fluid
  return <Img alt={alt} fluid={fluid} />
}
