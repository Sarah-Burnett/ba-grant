import { LOAD_PROGRESS, UPDATE_PROGRESS } from "../types";

export const loadProgress = (progress) => ({
	type: LOAD_PROGRESS,
	payload: progress,
});

export const updateProgress = (tutorial) => ({
	type: UPDATE_PROGRESS,
	payload: tutorial,
});
