import "./App.css";
import Navbar from "./Navbar.js";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
export default function App() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <About handleChange={handleChange} checked={checked} />
        </Route>
        <Route path="/projects">
          <Projects handleChange={handleChange} checked={checked} />
        </Route>
        <Route path="/contact">
          <Contact handleChange={handleChange} checked={checked} />
        </Route>
      </Switch>
    </div>
  );
}
