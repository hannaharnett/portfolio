import React, { Component } from "react";
import styled from "styled-components";
import HomeIllustration from "./kingdom-upgrade-account.png";
import ExternalLink from "./ExternalLink";
import PageFocus from './PageFocus';
import Footer from "./Footer";
import { device } from "./device";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  img {
    width: 450px;
    align-self: center;
    margin-right: 60px;
  }
  @media ${device.tablet} {
    img {
      width: 50%;
      margin-right: 0;
    }
  }
  @media ${device.mobile} {
    flex-direction: column-reverse;
    align-items: center;
    & img {
      width: 100%;
    }
  }
`;
const Div = styled.div`
  width: 650px;
  align-self: center;
  font-size: 1.4rem;
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.1;
    margin: 40px 0;
  }
  @media ${device.tablet} {
    h2 {
      font-size: 3rem;
    }
    a {
      text-decoration: underline;
    }
  }
  @media ${device.mobile} {
    width: 100%;
    text-align: center;
    align-self: flex-start;
    h2 {
      font-size: 2rem;
      margin: 20px 0;
    }
    a {
      font-size: 1.2rem;
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <PageFocus headerText="Hannah Arnett | Portfolio | Web Developer">
        <Wrapper>
          <Div>
            <h2>Hullo! I'm Hannah, Santa Barbara based web developer.</h2>
            <ExternalLink
              link="https://www.linkedin.com/in/hannah-arnett/"
              name="LinkedIn"
            />
            {"  / /  "}
            <ExternalLink
              link="https://github.com/hannaharnett"
              name="Github"
            />
          </Div>
          <img src={HomeIllustration} alt="illustration" />
        </Wrapper>
        <Footer />
      </PageFocus>
    );
  }
}

export default Home;
