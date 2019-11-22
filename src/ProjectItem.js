import React, { Component } from "react";
import styled from "styled-components";
import ExternalLink from "./ExternalLink";
import { device } from "./device";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px 20px 0;
  width: 100%;
`;

const About = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  & h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 2.7rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.1;
    color: #ee534c;
  }
  ,
  & p {
    font-size: 1.4rem;
    margin: 15px 0;
  }
  a {
    text-decoration: underline;
  }
  @media ${device.tablet} {
    h1 {
      font-size: 2rem;
    }
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

class ProjectItem extends Component {
  render() {
    return (
      <Wrapper>
        <About>
          <h1>{this.props.project.name}</h1>
          <p>{this.props.project.description}</p>
          <ExternalLink link={this.props.project.website} name="View Project" />
          <ExternalLink link={this.props.project.code} name="View Code" />
        </About>
      </Wrapper>
    );
  }
}

export default ProjectItem;
