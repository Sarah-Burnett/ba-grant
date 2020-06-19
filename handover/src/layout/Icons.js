import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faHome, faFile } from '@fortawesome/free-solid-svg-icons';
import { lightGrey } from '../Styles';

export const HomeIcon = () => {
    return (
        <FontAwesomeIcon className="home" icon={faHome}/>
    )
}


export const LinkIcon = () => {
    return (
        <FontAwesomeIcon icon={faExternalLinkAlt} style={{fontSize: "x-small"}}/>
    )
}