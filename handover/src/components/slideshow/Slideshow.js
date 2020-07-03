import React, { useContext } from 'react';
import SlidesContext from '../../context/slides/slidesContext';
import Slide from './Slide';

const Slideshow = () => {
    const slidesContext = useContext(SlidesContext);
    const { currentSlide, title } = slidesContext;
    return ( 
        <Slide currentSlide={currentSlide} title={title}/> 
    )
};

export default Slideshow;
