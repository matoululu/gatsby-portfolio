import * as React from "react";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Logo/>
      </nav>
      <h1>Hi, i'm Matthew Marineau</h1>
      <p>I'm a front-end developer, avid creator and space enthusiast living in Ottawa 🇨🇦.</p>
      <a href="https://github.com/matoululu" target="_blank" rel="noreferrer" className="button">My Github</a>
      <a href="matthew-marineau-resume.pdf" target="_blank" rel="noreferrer" className="button button--secondary">My resume</a>
    </header>
  )
}

export default Header
