import * as React from "react";
import { Helmet } from "react-helmet"
import "../styles/styles.scss";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";


const IndexPage = () => {
  return (
    <main >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Matthew Marineau | Frontend developer</title>
        <link rel="canonical" href="http:/matou.io" />
      </Helmet>
      <Header/>
      <About/>
      <Projects/>
    </main>
  )
};

export default IndexPage;
