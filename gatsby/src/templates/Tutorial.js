import React, { useEffect, useState } from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import Layout from "../components/Layout"
import Slideshow from "../components/tutorial/slideshow/Slideshow"
import FullSlides from "../components/tutorial/fullslides/FullSlides"

export default function TutorialTemplate({ pageContext: { tutorial } }) {
  const [isSlideshowView, setIsSlideshowView] = useState(true)
  const changeView = () => {
    setIsSlideshowView(prev => !prev)
    localStorage.setItem("isSlideshowView", !isSlideshowView)
  }
  const slideProp = {
    changeView,
    tutorial,
    name: tutorial.name,
    title: tutorial.title,
    category: tutorial.category,
    redirect: tutorial.redirect,
    slides: tutorial.slides,
  }
  useEffect(() => {
    const savedView = localStorage.getItem("isSlideshowView")
    if (savedView === false) {
      console.log("yass i am if")
      setIsSlideshowView(false)
    }
  }, [])
  return (
    <PageTransition>
      <Layout>
        {isSlideshowView ? (
          <Slideshow slideProp={slideProp} />
        ) : (
          <FullSlides slideProp={slideProp} />
        )}
      </Layout>
    </PageTransition>
  )
}
