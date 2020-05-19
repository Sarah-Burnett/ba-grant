import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 80vw;
    margin: auto;
    background: #95c5e2;
    padding: 2vw;
`

const Title = styled.h2`
    line-height: 2;
    padding-bottom: 2vw;
    text-align: center;
`

const Img = styled.div`
    width: 100%;
    max-height: 50vh;
    overflow-y: scroll;
    img {
        width: 100%;
    }
`

const Text = styled.div`
    width: 100%;
    height: auto;
    line-height: 2;
    padding: 2vh 0;
`

const Buttons = styled.div`
    padding: 2vh 0 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    padding: 2vh 2vw;
    border: none;
    color: #001429;
    cursor: pointer;
    &:hover {
        background: #001429;
        color: #e5f1f8;
    }
    &:disabled {
        opacity: 0;
        pointer-events: none;
    }
`

const Slideshow = ({json, startStep}) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ currentStep, setCurrentStep ] = useState(startStep);
    const [ prevBtn, setPrevBtn ] = useState(true);
    const [ nextBtn, setNextBtn ] = useState(false);

    const nextStep = () => {
        setPrevBtn(false);
        setNextBtn(false);
        const newIndex = currentIndex + 1
        if (newIndex < json.length) {
            setCurrentIndex(newIndex);
            setCurrentStep( () => json[newIndex])
        }
        if (newIndex === json.length-1){
            setNextBtn(true)
        }
    };
    const prevStep = () => {
        setPrevBtn(false);
        setNextBtn(false);
        const newIndex = currentIndex - 1
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
            setCurrentStep( () => json[newIndex])
        }
        if (newIndex === 0) setPrevBtn(true)
    };
    return (
        <Container>
                { currentStep.name && <Title>{currentStep.name}</Title> }
                { currentStep.image && <Img><img src={currentStep.image } alt="screenshot"/></Img> }
                <Text>
                {
                   currentStep.description && currentStep.description.map( item => <p>{item}</p>)
                }
                </Text>      
                <Buttons>
                    <Button className="previous" type="button" onClick={prevStep} disabled={prevBtn}>Previous</Button>
                    <Button className="next" type="button" onClick={nextStep} disabled={nextBtn}>Next</Button>
                </Buttons> 
           </Container>
    )
};

export default Slideshow;
