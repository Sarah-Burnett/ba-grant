import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow'

const QualtricsExport = () => {
    const [ json, setJson ] = useState([]);

    const startStep = {
        "name": "Exporting Data from Qualtrics",
        "image": "./images/qualtrics/qualtrics-screener.png",
        "description": [
           "The following information details how to export data from Qualtrics",
           "It also covers cleaning up the excel file ready to add to sharepoint",
           "If you are new to Qualtrics, please view the getting started slides first",
           "For more information see the Qualtrics support pages",
           "Click 'next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/qualtricsexport.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
}

export default QualtricsExport;
