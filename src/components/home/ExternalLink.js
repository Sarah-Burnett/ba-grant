import React from "react";
import { LinkIcon } from "../Icons";
import { useDispatch } from "react-redux";
import { UPDATE_PROGRESS } from "../../redux/types";

export const ExternalLink = ({ name, url, state }) => {
	const dispatch = useDispatch();
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			onClick={() => dispatch({ type: UPDATE_PROGRESS, payload: state })}
		>
			{name} <LinkIcon />
		</a>
	);
};
