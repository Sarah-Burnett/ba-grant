import React, { useContext, useEffect } from 'react';
import SlidesContext from '../context/slides/slidesContext';
import Slideshow from './slideshow/Slideshow';
import FullSlides from './fullslides/FullSlides';

const Slides = ({url, redirectMsg='Back to Home', redirectUrl='/'}) => {
    const slidesContext = useContext(SlidesContext);
    const { loadSlides, loading, viewAsSlideshow } = slidesContext;
    useEffect( () => {
        loadSlides(url, redirectMsg, redirectUrl);
    }, [])
    return (
        <div>
            { !loading && viewAsSlideshow && <Slideshow className="fade" url/> }
            { !loading && !viewAsSlideshow && <FullSlides/> }
        </div>
    )
};

export default Slides;
