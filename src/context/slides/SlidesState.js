import React, { useReducer } from "react";
import SlidesContext from "./slidesContext";
import slidesReducer from "./slidesReducer";
import {
	LOAD_SLIDES,
	VIEW_FULLSLIDES,
	VIEW_SLIDESHOW,
	CHANGE_SLIDE,
	START_SLIDE,
	END_SLIDE,
} from "../types";

const SlidesState = (props) => {
	const initialState = {
		json: [],
		viewAsSlideshow: true,
		redirectUrl: "",
		redirectMsg: "",
		progress: "",
		loading: true,
		currentSlide: [],
		currentIndex: 0,
		title: "",
		start: true,
		end: false,
	};
	const [state, dispatch] = useReducer(slidesReducer, initialState);

	const loadSlides = async (url, redirectMsg, redirectUrl, progress) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: LOAD_SLIDES,
					payload: {
						json: data,
						currentSlide: data[0],
						currentIndex: 0,
						title: data[0].name,
						loading: false,
						redirectMsg,
						redirectUrl,
						progress,
						start: true,
						end: false,
					},
				});
			})
			.catch((err) => console.log(err)); //need to add error if cant find
	};

	const viewFullSlides = () => {
		dispatch({
			type: VIEW_FULLSLIDES,
		});
	};

	const viewSlideshow = () => {
		dispatch({
			type: VIEW_SLIDESHOW,
		});
	};

	const nextSlide = (json, currentIndex) => {
		const newIndex = currentIndex + 1;
		const newSlide = json[newIndex];
		const payload = {
			currentIndex: newIndex,
			currentSlide: newSlide,
		};
		if (newIndex < json.length - 1) {
			dispatch({
				type: CHANGE_SLIDE,
				payload: payload,
			});
		} else {
			dispatch({
				type: END_SLIDE,
				payload: payload,
			});
		}
	};

	const prevSlide = (json, currentIndex) => {
		const newIndex = currentIndex - 1;
		const newSlide = json[newIndex];
		const payload = {
			currentIndex: newIndex,
			currentSlide: newSlide,
		};
		if (newIndex > 0) {
			dispatch({
				type: CHANGE_SLIDE,
				payload: payload,
			});
		} else {
			dispatch({
				type: START_SLIDE,
				payload: payload,
			});
		}
	};

	return (
		<SlidesContext.Provider
			value={{
				json: state.json,
				viewAsSlideshow: state.viewAsSlideshow,
				redirectUrl: state.redirectUrl,
				redirectMsg: state.redirectMsg,
				progress: state.progress,
				loading: state.loading,
				currentSlide: state.currentSlide,
				currentIndex: state.currentIndex,
				title: state.title,
				start: state.start,
				end: state.end,
				loadSlides,
				viewFullSlides,
				viewSlideshow,
				nextSlide,
				prevSlide,
			}}
		>
			{props.children}
		</SlidesContext.Provider>
	);
};

export default SlidesState;
