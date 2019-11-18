import React, { Component } from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import { device } from "./device";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

class ProjectList extends Component {
  render() {
    return (
      <Grid>
        {this.props.projects.map(project => {
          return <ProjectItem project={project} key={project.name} />;
        })}
      </Grid>
    );
  }
}

export default ProjectList;
