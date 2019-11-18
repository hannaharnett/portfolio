import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFoundPage from "./NotFoundPage";
import styled from "styled-components";
import { device } from "./device";

const Wrapper = styled.main`
  margin: 50px 80px;
  @media ${device.mobile} {
    margin: 40px 50px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Wrapper>
  );
}

export default App;
