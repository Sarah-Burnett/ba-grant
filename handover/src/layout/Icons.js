import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faHome, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { lightGrey } from '../Styles';

export const HomeIcon = () => {
    return (
        <FontAwesomeIcon className="home" icon={faHome}/>
    )
}

export const EllipsisIcon = () => {
    return (
        <FontAwesomeIcon icon={faEllipsisV}/>
    )
}


export const LinkIcon = () => {
    return (
        <FontAwesomeIcon icon={faExternalLinkAlt} style={{fontSize: "x-small"}}/>
    )
}

export const UncheckedIcon = () => {
    return (
        <span>&#9744;</span>
    )
}

export const CheckedIcon = () => {
    return (
        <span>&#9745;</span>
    )
}