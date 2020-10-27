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
  &[target="_blank"]:after {
    content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==");
    margin: 0 5px 10px 5px;
  }
`;

class ExternalLink extends Component {
  render() {
    const { link, name } = this.props;
    return (
      <Url target="_blank" rel="noopener noreferrer" href={link} aria-describedby={name}>
        {name} 
        <span className="visually-hidden" id={name}>Opens an external site in a new window</span>
      </Url>
    );
  }
}

export default ExternalLink;
