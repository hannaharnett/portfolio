import React, { Component } from "react";
import styled from "styled-components";
import ProjectItem from './ProjectItem';
import PageFocus from './PageFocus';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

let projects = [
  {
    name: "Where in the World?",
    description:
      "A single-page-application integrating REST Countries API. Shows you the countries from the API on the homepage. You can search for a specific country by name or filter by region.",
    website: "https://wherein-theworld.netlify.app/#/",
    code: "https://github.com/hannaharnett/rest_countries",
  },
  {
    name: "Colorful",
    description:
      "Colorful is a CRUD single-page-application built with React where you can create and update color palettes.",
    website: "https://colorful-app.herokuapp.com/",
    code: "https://github.com/hannaharnett/coloful",
  },
  {
    name: "Credit Card Form",
    description:
      "React Form Validation. The page portrays the information on the credit card as the user inputs it. Invalid information will be stored in error object in state.",
    website: "https://hannaharnett.github.io/credit-card-form/",
    code: "https://github.com/hannaharnett/credit-card-form",
  },
  {
    name: "Fylo Landing Page",
    description:
      "The project was built through a Frontend Mentor challenge. They provide designs in JPG static format. The project was built without exact measurements, forcing me to use my own judgement for styles.",
    website: "https://hannaharnett.github.io/fylo-landing-page/",
    code: "https://github.com/hannaharnett/fylo-landing-page",
  },
  {
    name: "Vocab",
    description:
      "A React Flashcard app with masonry layout achieved through css grid.",
    website: "https://fervent-mcclintock-90012a.netlify.app/",
    code: "https://github.com/hannaharnett/vocab",
  },
];

class Projects extends Component {
  render() {
    const projectList = projects.map(project => {
      return <ProjectItem project={project} key={project.name} />
    })

    return (
      <PageFocus headerText="Hannah Arnett | Projects">
        <Wrapper>
          {projectList}
        </Wrapper>
      </PageFocus>
    );
  }
}

export default Projects;
