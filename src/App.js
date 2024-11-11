import React from "react";
import "./assets/style.css";
import Header from "./component/Header";
import About from "./component/About";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="app-container">
      <div className="cv-wrapper">
        <Header />
        <About />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
