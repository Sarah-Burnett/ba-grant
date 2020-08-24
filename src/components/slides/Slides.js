import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Slideshow from "./slideshow/Slideshow";
import FullSlides from "./fullslides/FullSlides";
import { useSelector, useDispatch } from "react-redux";
import { loadSlides } from "../../redux/actions/slidesActions";

const Slides = ({
	url,
	redirectMsg = "Back to Home",
	redirectUrl = "/",
	progress,
	setIsHome
}) => {
	const { loading, viewAsSlideshow } = useSelector((state) => state.slides);
	const dispatch = useDispatch();
	console.log(url);
	useEffect(() => {
		setIsHome(false);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				dispatch(loadSlides(data, redirectMsg, redirectUrl, progress))
			});
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
