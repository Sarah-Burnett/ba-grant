import React, { useState, useEffect } from "react"
import Slide from "./Slide"

const Slideshow = ({ tutorial }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState([])
  const [isFinalSlide, setIsFinalSlide] = useState(false)
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const nextSlide = () => setCurrentIndex(prev => ++prev)
  const previousSlide = () => setCurrentIndex(prev => prev--)
  useEffect(() => {
    setCurrentSlide(tutorial.slides[currentIndex])
    currentIndex === tutorial.slides.length - 1
      ? setIsFinalSlide(true)
      : setIsFinalSlide(false)
    currentIndex === 0 ? setIsFirstSlide(true) : setIsFirstSlide(false)
  }, [currentIndex])
  const slideProp = {
    tutorial,
    name: tutorial.name,
    title: tutorial.title,
    redirect: tutorial.redirect,
    category: tutorial.category,
    currentIndex,
    currentSlide,
    nextSlide,
    previousSlide,
    isFirstSlide,
    isFinalSlide,
  }
  return <Slide slideProp={slideProp} />
}

export default Slideshow
