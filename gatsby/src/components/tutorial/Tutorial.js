import React from "react"
// import { CSSTransition } from "react-transition-group";
import Slideshow from "./slideshow/Slideshow"
import FullSlides from "./fullslides/FullSlides"

export default function Tutorial({ slideProp: { isSlideshowView } }) {
  return isSlideshowView ? <Slideshow /> : <FullSlides />
}
