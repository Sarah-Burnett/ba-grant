import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow';

const PsychophysTesting = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Collecting the psychophys data",
        "image": "./images/psychophys/testing-example.png",
        "description": [
           "The following information details the psychophys component of preparing the lab for testing",
           "Click 'Next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/psychophyscollection.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
}

export default PsychophysTesting;
