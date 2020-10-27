import React, { Component } from "react";
import styled from "styled-components";
import ExternalLink from "./ExternalLink";
import { device } from "./device";

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px 20px 0;
  width: 100%;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  & h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 2.7rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.1;
    color: #e62711;
  }
  & p {
    font-size: 1.4rem;
    margin: 15px 0;
  }
  a {
    text-decoration: underline;
  }
  @media ${device.tablet} {
    h2 {
      font-size: 2rem;
    }
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

class ProjectItem extends Component {
  render() {
    const { name, description, website, code } = this.props.project;
    const noWebsite = !website ? "" : "View Project";
    return (
      <Wrapper>
        <About>
          <h2>{name}</h2>
          <p>{description}</p>
          <ExternalLink link={website} name={noWebsite} />
          <ExternalLink link={code} name="View Code" />
        </About>
      </Wrapper>
    );
  }
}

export default ProjectItem;
