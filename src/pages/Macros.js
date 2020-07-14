import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow'

const Macros = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Macros",
        "image": "./images/sharepoint/sharepoint-macros.png",
        "description": [
                "There are various excel and Acqknowledge macros to make the preprocessing more efficient",
                "These are all within the 'Macros' folder in '2020 data' on SharePoint",
                "They are also on the first harddrive 'BA Grant 1'",
                "This tutorial will go through using the excel macros I created (.bas)",
                "For the AcqKnowledge macro (.bbs), see the separate psychophys preprocessing tutorials"
            ]
    }

    useEffect( () => {
        fetch('./json/macros.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
}

export default Macros;
