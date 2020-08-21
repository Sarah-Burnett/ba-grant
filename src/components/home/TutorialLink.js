import React from "react";
import { Link } from "react-router-dom";

export const TutorialLink = ({ url, name, state }) => {
	return <Link to={url}>{name}</Link>;
};
