import React from "react";
import { CheckedIcon, UncheckedIcon } from "../Icons";
import { useSelector } from "react-redux";

export const Checkbox = ({ state }) => {
	const isCompleted = useSelector((storeState => storeState.progress[state]));
	return isCompleted ? <CheckedIcon /> : <UncheckedIcon />;
};
