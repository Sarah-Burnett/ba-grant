import React from 'react'

const Description = ({desc}) => {
    return (
        <ul>
            {desc.map( item => {return <li key={item}>{item}</li>})}
        </ul>
    )
}

export default Description