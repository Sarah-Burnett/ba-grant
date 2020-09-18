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
			return { ...state, ...action.payload};
		case UPDATE_PROGRESS:
			return {
				...state, [action.payload ]:  true
			}
		default:
			return state;
	}
};
