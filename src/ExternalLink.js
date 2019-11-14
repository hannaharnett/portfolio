import React, { Component } from "react";
import styled from "styled-components";

const Url = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: black;
  margin: 5px 0;
  &:hover {
    text-decoration: underline;
  }
`;

class ExternalLink extends Component {
  render() {
    return (
      <Url target="_blank" rel="noopener noreferrer" href={this.props.link}>
        {this.props.name}
      </Url>
    );
  }
}

export default ExternalLink;
