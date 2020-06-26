import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { lightGrey, darkGrey, tablet,  PrimaryButton, Button} from '../../Styles';
import styled from 'styled-components';
import SlidesContext from '../../context/slides/slidesContext';
import Slide from './Slide';

const Container = styled.div`
    width: 100vw;
    margin: auto;
    @media (min-width: ${tablet}) {
        width: 75vw;
    }
`

const H1 = styled.h1`
    text-align: center;
    border-bottom: 1px solid ${darkGrey};
    margin-bottom: 2vh;
    padding: 2vh 0;
`


const FullSlides = () => {
    const slidesContext = useContext(SlidesContext);
    const { json, title, viewSlideshow, redirectUrl, redirectMsg } = slidesContext;
    return (
        <Container>
                <H1>{title}</H1>
                { json.map( slide => <Slide key={slide.name} slide={slide} title={title}/>)  }
                <Link to={redirectUrl}><PrimaryButton className="previous" type="button">{redirectMsg}</PrimaryButton></Link>
                <Button onClick={viewSlideshow}>View as Slideshow</Button>
        </Container>
    )
};

export default FullSlides;