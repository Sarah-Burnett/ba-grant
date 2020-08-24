import { LOAD_PROGRESS, UPDATE_PROGRESS } from "../types";

const initialState = {
	sharepointIntro: false,
	macros: false,
	dataStorage: false,
	sonaIntro: false,
	labBooking: false,
	qualtricsIntro: false,
	qualtricsExport: false,
	qualtricsSupport: false,
	qualtricsSurvey: false,
	eprimeTesting: false,
	eprimePreprocess: false,
	eprimeGuide: false,
	eprimeSupport: false,
	psychophysTesting: false,
	psychophysPreprocess1: false,
	psychophysPreprocess2: false,
	psychophysGuide: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOAD_PROGRESS:
			if (localStorage.progress) {
				const progress = JSON.parse(localStorage.progress);
				return { ...state, ...progress };
			} else return state;
		case UPDATE_PROGRESS:
			const newState = { ...state };
			newState[action.payload] = true;
			localStorage.setItem("progress", JSON.stringify(newState));
			return newState;
		default:
			return state;
	}
};
