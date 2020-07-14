import React, { Component, createRef } from "react";
import styled from "styled-components";
import ProjectList from "./ProjectList";
import VisuallyHiddenTitle from './VisuallyHiddenTitle';

const Wrapper = styled.section`
  width: 100%;
`;

let projects = [
  {
    name: "Where in the World?",
    description:
      "A single-page-application integrating REST Countries API. Shows you the countries from the API on the homepage. You can search for a specific country by name or filter by region.",
    website: "https://hannaharnett.github.io/rest_countries/#/",
    code: "https://github.com/hannaharnett/rest_countries",
  },
  {
    name: "Credit Card Form",
    description:
      "React Form Validation. The page portrays the information on the credit card as the user inputs it. Invalid information will be stored in error object in state.",
    website: "https://hannaharnett.github.io/credit-card-form/",
    code: "https://github.com/hannaharnett/credit-card-form",
  },
  {
    name: "Colorful",
    description:
      "Colorful is a CRUD single-page-application built with React where you can create and update color palettes.",
    website: "",
    code: "https://github.com/hannaharnett/coloful",
  },
  {
    name: "Tip Calculator",
    description:
      "Let's you easily calculate the tip amount by percentage and shows you the amount per person if spliting the bill with one or more people.",
    website: "https://hannaharnett.github.io/tip-calculator/",
    code: "https://github.com/hannaharnett/tip-calculator",
  },
  {
    name: "Fylo Landing Page",
    description:
      "The project was built through a Frontend Mentor challenge. They provide designs in JPG static format. The project was built without exact measurements, forcing me to use my own judgement for styles.",
    website: "https://hannaharnett.github.io/fylo-landing-page/",
    code: "https://github.com/hannaharnett/fylo-landing-page",
  },
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.heading = createRef();
  }
  componentDidMount() {
    this.heading.current.focus();
    document.title = "Projects"
    console.log(document.title, this.heading.current)
  }
  render() {
    return (
      <Wrapper aria-labelledby="pageTitle" ref={this.heading} tabIndex="-1">
        <VisuallyHiddenTitle id="pageTitle" title="Projects" />
        <ProjectList projects={projects} />
      </Wrapper>
    );
  }
}

export default Projects;
