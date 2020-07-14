import React, { useContext } from 'react';
import { LinkIcon } from '../../layout/Icons';
import ProgressContext from '../../context/progress/progressContext';

export const ExternalLink = ({name, url, state}) => {
    const progressContext = useContext(ProgressContext);
    const { updateProgress } = progressContext;
    return (
            <a href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => updateProgress(state)}>{name} <LinkIcon/></a>
    )
}