import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow'

const SonaIntro = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Getting starting with Sona",
        "image": "./images/sona/sona-login.png",
        "description": [
           "The following information details how to login and navigate around SONA",
           "After this, see separate tutorial for bulk granting credits for the screener survey.",
           "Click 'next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/sonaintro.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
}

export default SonaIntro;
