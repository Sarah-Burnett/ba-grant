import React, {useState, useEffect} from 'react';
import Slideshow from '../components/Slideshow'

const DataStorage = () => {
    const [ json, setJson ] = useState([]);

    const startSlide = {
        "name": "Guide to data storage",
        "image": "./images/sharepoint/sharepoint-2020-data.png",
        "description": [
           "The following information details the storage of data",
           "This includes SharePoint, the harddrives, the lab and the cabinent in the MDC group office",
           "Click 'Next' to get started"
        ]
    }

    useEffect( () => {
        fetch('./json/datastorage.json')
        .then(response => response.json())
        .then(data => setJson(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <Slideshow json={json} startStep={startStep}/>
    )
}

export default DataStorage;
