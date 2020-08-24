import { LOAD_PROGRESS, UPDATE_PROGRESS } from "../types";

export const loadProgress = () => ({
	type: LOAD_PROGRESS,
});

export const updateProgress = (tutorial) => ({
	type: UPDATE_PROGRESS,
	payload: tutorial,
});
