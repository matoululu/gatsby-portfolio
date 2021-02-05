import * as React from "react";
import "../styles/styles.scss";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";


const IndexPage = () => {
  return (
    <main >
      <title>Matthew Marineau | Frontend Developer</title>
      <Header/>
      <About/>
      <Projects/>
    </main>
  )
};

export default IndexPage;
