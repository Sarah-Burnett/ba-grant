import {
	LOAD_SLIDES,
	VIEW_FULLSLIDES,
	VIEW_SLIDESHOW,
	CHANGE_SLIDE,
	START_SLIDE,
	END_SLIDE,
} from "../types";

// export const loadSlides = (url, redirectMsg, redirectUrl, progress) => {
// 	fetch(url)
// 		.then((response) => response.json())
// 		.then(
// 			(data) => ({
// 				type: LOAD_SLIDES,
// 				payload: {
// 					json: data,
// 					currentSlide: data[0],
// 					currentIndex: 0,
// 					title: data[0].name,
// 					loading: false,
// 					redirectMsg,
// 					redirectUrl,
// 					progress,
// 					start: true,
// 					end: false,
// 				},
// 			})
// 			//TODO:need to add error if cant find
// 		);
// };

export const loadSlides = (data, redirectMsg, redirectUrl, progress) => {
	console.log(data);
	return {
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
	};
};

export const viewFullSlides = () => {
	return {
		type: VIEW_FULLSLIDES,
	};
};

export const viewSlideshow = () => {
	return {
		type: VIEW_SLIDESHOW,
	};
};

export const nextSlide = (json, currentIndex) => {
	const newIndex = currentIndex + 1;
	const newSlide = json[newIndex];
	const payload = {
		currentIndex: newIndex,
		currentSlide: newSlide,
	};
	if (newIndex < json.length - 1) {
		return {
			type: CHANGE_SLIDE,
			payload,
		};
	} else {
		return {
			type: END_SLIDE,
			payload,
		};
	}
};

export const prevSlide = (json, currentIndex) => {
	const newIndex = currentIndex - 1;
	const newSlide = json[newIndex];
	const payload = {
		currentIndex: newIndex,
		currentSlide: newSlide,
	};
	if (newIndex > 0) {
		return {
			type: CHANGE_SLIDE,
			payload,
		};
	} else {
		return {
			type: START_SLIDE,
			payload,
		};
	}
};
