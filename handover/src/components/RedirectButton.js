import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, PrimaryButton } from '../Styles';
import SlidesContext from '../context/slides/slidesContext';
import ProgressContext from '../context/progress/progressContext';


export const RedirectButton = () => {
    const slidesContext = useContext(SlidesContext);
    const { redirectMsg, redirectUrl, progress } = slidesContext; 
    const progressContext = useContext(ProgressContext);
    const { updateProgress } = progressContext;
    console.log(progress, redirectMsg, redirectUrl);
    return (
        <Link to={redirectUrl} onClick={() => updateProgress(progress)}>
            <PrimaryButton className="redirect" type="button">
                {redirectMsg}
            </PrimaryButton>
        </Link>
    )
}