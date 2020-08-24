import React from "react";
import Slide from "./Slide";
import { useSelector } from "react-redux";

const Slideshow = () => {
	const { currentSlide, title } = useSelector((state) => state.slides);
	return <Slide currentSlide={currentSlide} title={title} />;
};

export default Slideshow;
