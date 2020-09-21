import React from "react"

export default function Description({ desc }) {
  return (
    <ul>
      {desc.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
