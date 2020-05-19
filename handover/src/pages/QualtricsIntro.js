import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const Slideshow = styled.div`
    width: 80vw;
    margin: auto;
    background: lightblue;
    border: 3px solid lightblue;
`

const Img = styled.img`
    width: 80vw;
`

const Text = styled.div`
    width: 80vw;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

const Buttons = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
`

export const QualtricsIntro = () => {

    const [ json, setJson ] = useState([]);
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ currentStep, setCurrentStep ] = useState({
        "name": "Getting starting with Qualtrics",
        "image": "./images/qualtrics/qualtrics-intro.png",
        "description": [
           "The following information details how to login and navigate around Qualtrics",
           "This outlines the basic use of Qualtrics for the screening survey for part 1 of the study.",
           "After this, for more information on extracting the data see separate tutorial here.",
           "For more information see the Qualtrics support pages",
           "Click 'next' to get started"
        ]
    });
     
    useEffect( () => console.log(currentStep, currentStep.name,))

    useEffect( () => {
        fetch('./json/sona.json')
        .then(response => response.json())
        .then(data => {
            setJson(data)
        })
        .catch(err => console.log("Error Reading data " + err))
    }, [])

    const nextStep = () => {
        const newIndex = currentIndex + 1
        if (newIndex < json.length) {
            setCurrentIndex(newIndex);
            setCurrentStep( () => json[newIndex])
        }
    }

    const prevStep = () => {
        const newIndex = currentIndex - 1
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
            setCurrentStep( () => json[newIndex])
        }
    }

    return (
        <div>
           <Slideshow>
                <h2>{currentStep.name}</h2>
                <Img src={currentStep.image } alt="screenshot"/>
                <Text className="overlay">
                {
                   currentStep.description.map( item => <li>{item}</li>)
                }
                </Text>
                <Buttons>
                    <button className="previous" onClick={prevStep}>Previous</button>
                    <button className="next" onClick={nextStep}>Next</button>
                </Buttons>
           </Slideshow>
           
        </div>
    )
}
