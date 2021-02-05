import * as React from "react";

const projects = [
  {
    title: "1Screen",
    description: "A single screen application for dungeon masters",
    image: "1screen.svg",
    github: "https://github.com/matoululu/1screen-plus",
    live: "https://matoululu.github.io/1screen-plus/",
    borderTop: "5px solid #e01a41"
  },
  {
    title: "Browntimer",
    description: "The handy stool tool! Calculate how much you're earning on the toilet",
    image: "browntimer.svg",
    github: "https://github.com/matoululu/react-browntimer",
    live: "https://matoululu.github.io/react-browntimer/",
    borderTop: "5px solid #a57655"
  },
  {
    title: "Launchpad",
    description: "An open source framework for faster building",
    image: "launchpad.png",
    github: "https://github.com/Bracketeers/Launchpad",
    live: "https://bracketeers.github.io/Launchpad/",
    borderTop: "5px solid #13a5e6"
  },
  {
    title: "LootJunkie",
    description: "Mimic the experience of opening some of your favorite loot boxes and packs",
    image: "lootjunkie.svg",
    github: "https://github.com/matoululu/LootJunkie",
    live: "https://matoululu.github.io/LootJunkie/",
    borderTop: "5px solid #f99e1a"
  },
  {
    title: "Oracle 5E",
    description: "A quick reference tool for Dungeons & Dragons 5th edition",
    image: "oracle.png",
    github: "https://github.com/matoululu/oracle-5e",
    live: "https://addons.mozilla.org/en-CA/firefox/addon/oracle-5e/",
    borderTop: "5px solid #593d95"
  },
  {
    title: "ZipEmote",
    description: "Transform images into a set of twitch emotes",
    image: "zipemote.svg",
    github: "https://github.com/matoululu/react-zipemote",
    live: "https://matoululu.github.io/react-zipemote/",
    borderTop: "5px solid #9146ff"
  }
]

const Projects = () => {
  return (
    <section>
      <h2>Personal Projects</h2>

      <div className="cards">
        {projects.map(project => (
          <div className="card" style={{ borderTop: project.borderTop }}>
            <img className="card__logo" src={project.image} alt={project.title}/>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card__buttons">
              <a href={project.live} target="_blank" rel="noreferrer" className="button">Live</a><a href={project.github} target="_blank" rel="noreferrer" className="button button--secondary">Github</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
