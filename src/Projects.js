import React, { Component } from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";

const Wrapper = styled.main``;

let projects = [
  {
    name: "Project 1",
    description: "",
    website: "www.something.com",
    code: ""
  },
  {
    name: "Project 2",
    description: "",
    website: "www.something.com",
    code: ""
  },
  {
    name: "Project 3",
    description: "",
    website: "www.something.com",
    code: ""
  }
];

class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <ProjectList projects={projects} />
      </Wrapper>
    );
  }
}

export default Projects;
