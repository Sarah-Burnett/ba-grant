import React from "react"
import { Link } from "gatsby"
import { PrimaryButton } from "../../styles/components"

export const RedirectButton = ({ slideProp: { name, redirect } }) => {
  const updateSlidesProgress = () => localStorage.setItem(name, true)
  const redirectMsg = redirect ? redirect.msg : "Back to Home"
  const redirectUrl = redirect ? `/${redirect.slug}` : "/"
  return (
    <Link to={redirectUrl} onClick={updateSlidesProgress}>
      <PrimaryButton className="redirect" type="button">
        {redirectMsg}
      </PrimaryButton>
    </Link>
  )
}
