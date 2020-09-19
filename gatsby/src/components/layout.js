import React, { useState } from "react"
import Footer from "./nav/Footer"
import Nav from "./nav/Nav"
import styled from "styled-components"
import "../styles/app.css"

const Main = styled.main`
  min-height: 70vh;
`

const Layout = ({ children }) => {
  const [isSlideshowView, setIsSlideshowView] = useState(true)
  const slideshowProp = {
    isSlideshowView,
    changeView: () => setIsSlideshowView(prev => !prev)
  }
  return (
    <>
      <Nav slideshowProp={slideshowProp} />
      <Main slideshowProp={slideshowProp}>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
