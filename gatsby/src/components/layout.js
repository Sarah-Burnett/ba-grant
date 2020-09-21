import React, { cloneElement, useState } from "react"
import Footer from "./nav/Footer"
import Nav from "./nav/Nav"
import styled from "styled-components"
import "../styles/app.css"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  min-height: 70vh;
`
