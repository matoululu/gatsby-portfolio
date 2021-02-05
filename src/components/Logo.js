import * as React from "react"
import LogoImage from "../images/bracketeers.svg"

const Logo = () => {
  return (
    <a href="/">
      <img className="logo" src={LogoImage} alt="matou.io"/>
    </a>
  )
}

export default Logo
