import React from "react"
import { A } from "../../styles/components"

export default function FooterLink({ text, url }) {
  return (
    <A href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </A>
  )
}
