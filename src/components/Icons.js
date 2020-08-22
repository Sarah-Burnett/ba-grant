import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faExternalLinkAlt,
	faHome,
	faList,
	faUser
} from "@fortawesome/free-solid-svg-icons";

export const HomeIcon = () => <FontAwesomeIcon icon={faHome} />;
export const UserIcon = () => <FontAwesomeIcon icon={faUser} />;
export const ListIcon = () => <FontAwesomeIcon icon={faList} />;
export const LinkIcon = () => <FontAwesomeIcon icon={faExternalLinkAlt} />;

export const UncheckedIcon = () => <span>&#9744;</span>;
export const CheckedIcon = () => <span>&#9745;</span>;
