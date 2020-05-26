import React from 'react'

const Description = ({desc}) => {
    return (
        <ul>
            {desc.map( item => <li key={item}>{item}</li> )}
        </ul>
    )
}

export default Description