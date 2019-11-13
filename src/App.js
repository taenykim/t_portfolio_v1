import React, { Component } from "react";
import Menu from "./components/Menu";
import Home from "./components/Home/Home";
import About from "./components/page1(About)/About";
import Works from "./components/page3(Works)/Works";
import Skills from "./components/page2(Skills)/Skills";
import Contact from "./components/page4(Contact)/Contact";
import "./reset.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="full_container">
        <Menu />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    );
  }
}

export default App;
