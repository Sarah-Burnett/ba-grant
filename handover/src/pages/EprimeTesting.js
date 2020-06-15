import React, { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow';

const EprimeTesting = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Collecting the e-prime data",
        "image": "./images/eprime/preprocessing-start",
        "description": [
           "The following information details the e-prime component of preparing the lab for testing",
           "Click 'Next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/eprimecollection.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
};

export default EprimeTesting;
