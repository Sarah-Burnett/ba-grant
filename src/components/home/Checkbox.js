import React, { useContext } from "react";
import { CheckedIcon, UncheckedIcon } from "../Icons";
import ProgressContext from "../../context/progress/progressContext";

export const Checkbox = ({ state }) => {
	const progressContext = useContext(ProgressContext);
	return progressContext[state] ? <CheckedIcon /> : <UncheckedIcon />;
};
