import React, { Component } from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";

const Wrapper = styled.main`
  width: 100%;
`;

let projects = [
  {
    name: "Colorful",
    description:
      "Colorful is a CRUD single-page-application built with React where you can create and update color palettes.",
    website: "",
    code: "https://github.com/hannaharnett/coloful"
  },
  {
    name: "Credit Card Form",
    description:
      "React Form Validation. The page portrays the information on the credit card as the user inputs it. Invalid information will be stored in error object in state.",
    website: "https://hannaharnett.github.io/credit-card-form/",
    code: "https://github.com/hannaharnett/credit-card-form"
  },
  {
    name: "Fylo Landing Page",
    description:
      "The project was built through a Frontend Mentor challenge. They provide designs in JPG static format. The project was built without exact measurements, forcing me to use my own judgement for styles.",
    website: "https://hannaharnett.github.io/fylo-landing-page/",
    code: "https://github.com/hannaharnett/fylo-landing-page"
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
