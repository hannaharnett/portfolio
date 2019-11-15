import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
