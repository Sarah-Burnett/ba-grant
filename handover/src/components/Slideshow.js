import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import SlideDots from './SlideDots';
import FullSlides from './FullSlides';
import styled from 'styled-components';
import { lightGrey, darkGrey, darkBlue, accent, white, Button } from '../Styles';

const tablet = "850px";

const Container = styled.div`
    width: 100vw;
    min-height: 92vh;
    margin: auto;
    padding: 1vh 1vw;
    background: ${white};
    @media (min-width: ${tablet}) {
        display: flex;
        height: 90vh;
        padding: 0;
    }
`



const Text = styled.div`
    background: ${white};
    width: 100%;
    padding: 2vh 4vw;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    grid-template-columns: 1;
    p {
        line-height: 2;
        margin-bottom: 2vh;
        width: 100%;
        padding: 0 1vw;
    }
    @media (min-width: ${tablet}) {
        flex: 1;
        padding: 2vh 1vw;
        margin: 0;
        overflow-y: scroll;
        height: 90vh;
        scrollbar-width:
        -ms-overflow-style: none; 
        &::-webkit-scrollbar { 
            width: 0;
            height: 0;
        }
        p, h1, h3, div {
            max-width: 50vw;
        }
    }
`

const H1 = styled.h1`
    text-align: center;
    border-bottom: 1px solid ${darkGrey};
    margin-bottom: 2vh;
    padding: 2vh 0;
`

const Title = styled.h3`
    line-height: 2;
    padding-bottom: 2vw;
    text-align: center;
`

const Img = styled.div`
    img {
        max-width: 100%;
    }   
    @media (min-width: ${tablet}) {
        flex: 1;
        overflow-y: scroll;
        height: 90vh;
        padding: 1vh 0;
    }
`

const Buttons = styled.div`
    padding: 2vh 1vw;
    width: 100%;
`



const PrimaryButton = styled(Button)`
    background: ${accent};
    
`

const Slideshow = ({json, startStep, redirectLink="/", redirectMsg="Back to Home"}) => {
    const [ currentIndex, setCurrentIndex ] = useState(-1);
    const [ currentStep, setCurrentStep ] = useState(startStep);
    const [ title, setTitle ] = useState(currentStep.name);
    const [ start, setStart ] = useState(true);
    const [ end, setEnd ] = useState(false);
    const [ fullSlides, setFullSlides ] = useState(false);
    const [ showSlides, setShowSlides ] = useState(true);

    const nextStep = () => {
        setStart(false);
        setEnd(false);
        const newIndex = currentIndex + 1
        if (newIndex < json.length) {
            setCurrentIndex(newIndex);
            setCurrentStep( () => json[newIndex])
        }
        if (newIndex === json.length-1) setEnd(true)
    };
    const prevStep = () => {
        setStart(false);
        setEnd(false);
        const newIndex = currentIndex - 1
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
            setCurrentStep( () => json[newIndex])
        }
        if (newIndex === 0) setStart(true)
    };
    return (
        <div>
            { fullSlides && <FullSlides json={json} title={title}/>}
            { !fullSlides && <Container>
                <Text>
                    <H1>{title}</H1>
                    <Title>
                    { currentStep.name && currentStep.name !== title ? currentStep.name : "Getting Started" }
                    </Title>
                    <div>
                    { currentStep.description && currentStep.description.map(item => <p key={item}>{item}</p>) }
                    </div>
                <Buttons>
                    <SlideDots json={json} currentIndex={currentIndex}/>
                     { end && <Link to={redirectLink}><Button className="previous" type="button">{redirectMsg}</Button></Link>}
                    { !end && <PrimaryButton className="next" type="button" onClick={nextStep}>Next</PrimaryButton> }
                    { !start && <Button className="previous" type="button" onClick={prevStep}>Previous</Button> }
                    <Button onClick={() => setFullSlides(true)}>View Full Slides</Button>
                </Buttons> 
                </Text>
                <Img>
                { currentStep.image && <img src={currentStep.image } alt="screenshot"/>}
                </Img>      
           </Container> }
        </div>
    )
};

export default Slideshow;
