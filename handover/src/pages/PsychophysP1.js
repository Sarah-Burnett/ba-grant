import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow';


const PsychophysP1 = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Psychophys preprocessing part 1",
        "image": "./images/psychophys/preprocessing-1-intro.png",
        "description": [
            "This slideshow goes through the steps for part 1 of the preprocessing",
            "The purpose of part 1 is to generate the beats (QRS peaks) per minute across the experiment",
            "First we will apply a filter to the heart rate (ECG) data and then we can identify all the QRS peaks to calculate BPM",
            "For further information, please speak to Anke and/or view the pdfs in the 'BiopacDA' folder on sharepoint/harddrive",
            "Click 'Next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/psychophysp1.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}  redirectLink="/psychophys-preprocess-p2" redirectMsg="Proceed to Part 2"/>
    )
}

export default PsychophysP1;
