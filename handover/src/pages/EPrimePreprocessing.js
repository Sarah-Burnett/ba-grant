import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow';


const EprimePreprocessing = () => {
    const [ json, setJson ] = useState([]);

    const startStep =  {
        "name": "E-prime preprocessing",
        "image": "./images/eprime/preprocessing-start.png",
        "description": [
            "This tutorial outlines the preprocessing steps for the data collected on E-Prime",
            "The majority of this will need to be done on a university computer with E-Prime installed",
            "Click 'next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/eprimepreprocessing.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
}

export default EprimePreprocessing;
