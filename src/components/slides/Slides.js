import React, { useContext, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import SlidesContext from "../../context/slides/slidesContext";
import Slideshow from "./slideshow/Slideshow";
import FullSlides from "./fullslides/FullSlides";

const Slides = ({
	url,
	redirectMsg = "Back to Home",
	redirectUrl = "/",
	progress,
}) => {
	const slidesContext = useContext(SlidesContext);
	const { loadSlides, loading, viewAsSlideshow } = slidesContext;
	useEffect(() => {
		loadSlides(url, redirectMsg, redirectUrl, progress);
	}, []);
	return (
		<>
			<CSSTransition
				in={!loading && viewAsSlideshow}
				timeout={1000}
				classNames="fade"
				mountOnEnter
				unmountOnExit
			>
				<Slideshow className="fade" url />
			</CSSTransition>
			<CSSTransition
				in={!loading && !viewAsSlideshow}
				timeout={1000}
				classNames="fade"
				mountOnEnter
				unmountOnExit
			>
				<FullSlides className="fade" />
			</CSSTransition>
		</>
	);
};

export default Slides;
