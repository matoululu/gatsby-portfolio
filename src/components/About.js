import * as React from "react";
import Avatar from "../images/me.svg"

const About = () => {
  return (
    <section className="about">
      <div className="about__image">
        <img src={Avatar} alt="Avatar of me"/>
      </div>
      <div className="about__description">
        <h2>About Me</h2>
        <p>I'm web developer with over 5 years web development experience. I enjoy long walks, gaming, Dungeons &amp; Dragons and spending time with my wife and kid.</p>
        <p>I'm well-versed with HTML, SCSS, ES6, JavaScript, React, Gatsby and much more!</p>
      </div>
    </section>
  )
}

export default About
