import React from 'react'

export const Description = ({desc}) => {
    return (
        <ul>
            {desc.map( item => {return <li key={item}>{item}</li>})}
        </ul>
    )
}
