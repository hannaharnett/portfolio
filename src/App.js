import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
