import React from "react"
import { CheckedIcon, UncheckedIcon } from "../Icons"

export default function Checkbox({ name }) {
  let isCompleted = false
  if (localStorage.getItem(name)) isCompleted = true
  return isCompleted ? <CheckedIcon /> : <UncheckedIcon />
}
