import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow';


const PsychophysP2 = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Psychophys preprocessing part 2",
        "image": "./images/psychophys/preprocessing-2-intro.png",
        "description": [
            "This slideshow goes through the steps for part 2 of the preprocessing",
            "The purpose of part 1 is to output the heart rate and skin condunctance for each of the tasks",
            "Click 'Next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/psychophysp2.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
}

export default PsychophysP2;
