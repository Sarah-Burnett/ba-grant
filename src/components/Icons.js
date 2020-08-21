import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faExternalLinkAlt,
	faHome,
	faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

export const HomeIcon = () => (
	<FontAwesomeIcon className="home" icon={faHome} />
);
export const EllipsisIcon = () => <FontAwesomeIcon icon={faEllipsisV} />;
export const LinkIcon = () => (
	<FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: "x-small" }} />
);

export const UncheckedIcon = () => <span>&#9744;</span>;
export const CheckedIcon = () => <span>&#9745;</span>;
