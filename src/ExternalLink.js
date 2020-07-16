import React, { Component } from "react";
import styled from "styled-components";

const Url = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: black;
  margin: 5px 0;
  :hover {
    text-decoration: underline;
  }
`;

class ExternalLink extends Component {
  render() {
    const { link, name } = this.props;
    return (
      <Url target="_blank" rel="noopener noreferrer" href={link} aria-describedby="ext-link">
        {name}
        <span className="visually-hidden" id="ext-link">Opens an external site in a new window</span>
      </Url>
    );
  }
}

export default ExternalLink;
