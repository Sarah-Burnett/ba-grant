import React, { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow';

const EprimeTesting = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Collecting the e-prime data",
        "image": "./images/eprime/collection-scripts.png",
        "description": [
            "This will cover the steps taken to set up the delivery of the e-prime scripts in the lab",
            "This will also cover delivering the rest of the protocol minus the psychophys which is covered separately",
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
