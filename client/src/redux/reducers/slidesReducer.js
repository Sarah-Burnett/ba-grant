import {
	LOAD_SLIDES,
	VIEW_FULLSLIDES,
	VIEW_SLIDESHOW,
	CHANGE_SLIDE,
	START_SLIDE,
	END_SLIDE,
} from "../types";

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

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_SLIDES:
			return {
				...state,
				...action.payload,
			};
		case VIEW_FULLSLIDES:
			return {
				...state,
				viewAsSlideshow: false,
			};
		case VIEW_SLIDESHOW:
			return {
				...state,
				viewAsSlideshow: true,
			};
		case CHANGE_SLIDE:
			return {
				...state,
				...action.payload,
				start: false,
				end: false,
			};
		case END_SLIDE:
			return {
				...state,
				...action.payload,
				start: false,
				end: true,
			};
		case START_SLIDE:
			return {
				...state,
				...action.payload,
				start: true,
				end: false,
			};
		default:
			return state;
	}
};
