import React, { useReducer } from "react";
import ProgressContext from "./progressContext";
import progressReducer from "./progressReducer";
import { LOAD_PROGRESS, UPDATE_PROGRESS } from "../types";

const ProgressState = (props) => {
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
	const [state, dispatch] = useReducer(progressReducer, initialState);

	const loadProgress = () =>
		dispatch({
			type: LOAD_PROGRESS,
		});

	const updateProgress = (tutorial) =>
		dispatch({
			type: UPDATE_PROGRESS,
			payload: tutorial,
		});

	return (
		<ProgressContext.Provider
			value={{
				sharepointIntro: state.sharepointIntro,
				macros: state.macros,
				dataStorage: state.dataStorage,
				sonaIntro: state.sonaIntro,
				labBooking: state.labBooking,
				qualtricsIntro: state.qualtricsIntro,
				qualtricsExport: state.qualtricsExport,
				qualtricsSupport: state.qualtricsSupport,
				qualtricsSurvey: state.qualtricsSurvey,
				eprimeTesting: state.eprimeTesting,
				eprimePreprocess: state.eprimePreprocess,
				eprimeGuide: state.eprimeGuide,
				eprimeSupport: state.eprimeSupport,
				psychophysTesting: state.psychophysTesting,
				psychophysPreprocess1: state.psychophysPreprocess1,
				psychophysPreprocess2: state.psychophysPreprocess2,
				psychophysGuide: state.psychophysGuide,
				loadProgress,
				updateProgress,
			}}
		>
			{props.children}
		</ProgressContext.Provider>
	);
};

export default ProgressState;
