import React, { Component } from "react";
import styled from "styled-components";
import HomeIllustration from "./kingdom-upgrade-account.png";
import ExternalLink from "./ExternalLink";
import Footer from "./Footer";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & img {
    width: 450px;
    align-self: center;
    margin-right: 60px;
  }
`;
const Div = styled.section`
  width: 650px;
  align-self: center;
  font-size: 1.4rem;
  & h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.1;
    margin: 40px 0;
  }
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Div>
            <h1>Hullo! I'm Hannah, Portland based web developer.</h1>
            <ExternalLink
              link="https://github.com/hannaharnett"
              name="Github"
            />
            {"  //  "}
            <ExternalLink
              link="https://www.linkedin.com/in/hannah-arnett/"
              name="LinkedIn"
            />
          </Div>
          <img src={HomeIllustration} alt="illustration" />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Home;
