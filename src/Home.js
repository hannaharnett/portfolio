import React, { Component } from "react";
import styled from "styled-components";
import HomeIllustration from "./kingdom-upgrade-account.png";
import ExternalLink from "./ExternalLink";

const Wrapper = styled.main``;

const Div = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  & h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.1;
    width: 50%;
  }
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Div>
          <h1>Hullo! I'm Hannah, Portland based web developer.</h1>
          <img
            src={HomeIllustration}
            alt="illustration"
            style={{ width: "450px", marginRight: "60px" }}
          />
        </Div>
        <ExternalLink
          link="https://icons8.com"
          name="Illustration by Ouch.pics"
        />
      </Wrapper>
    );
  }
}

export default Home;
