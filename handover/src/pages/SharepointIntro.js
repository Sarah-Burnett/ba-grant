import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow'

const SharepointIntro = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Navigation around sharepoint",
        "image": "./images/sharepoint/sharepoint-home.png",
        "description": [
           "The following information details how to navigate around sharepoint",
           "After this, see separate slides on introductions to the e-prime and psychophys data",
           "Click 'next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/sharepointintro.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
}

export default SharepointIntro
