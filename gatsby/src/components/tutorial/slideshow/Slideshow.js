import React, { useState, useEffect } from "react"
import Slide from "./Slide"

const Slideshow = ({ slideProp, slideProp: { tutorial, slides } }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState([])
  const [isFinalSlide, setIsFinalSlide] = useState(false)
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const nextSlide = () => setCurrentIndex(prev => ++prev)
  const prevSlide = () => setCurrentIndex(prev => --prev)
  useEffect(() => {
    setCurrentSlide(slides[currentIndex])
    currentIndex === slides.length - 1
      ? setIsFinalSlide(true)
      : setIsFinalSlide(false)
    currentIndex === 0 ? setIsFirstSlide(true) : setIsFirstSlide(false)
  }, [currentIndex])
  slideProp = {
    ...slideProp,
    currentIndex,
    currentSlide,
    nextSlide,
    prevSlide,
    isFirstSlide,
    isFinalSlide,
  }
  return <Slide slideProp={slideProp} />
}

export default Slideshow
