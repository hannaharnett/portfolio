import React, { Component } from "react";
import styled from "styled-components";
import ContactIllustration from "./kingdom-1.png";
import ExternalLink from "./ExternalLink";
import Footer from "./Footer";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & img {
    width: 500px;
    align-self: center;
    margin-right: 60px;
  }
`;

const Div = styled.section`
  width: 500px;
  align-self: center;
  & h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 1.1;
    margin: 40px 0;
  }
  ,
  & p {
    font-size: 1.4rem;
    margin: 10px 0;
  }
`;

class Contact extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Div>
            <h1>Alright, how do you take your coffee?</h1>
            <p>hannahtesaker@gmail.com</p>
            <ExternalLink
              link="https://www.linkedin.com/in/hannah-arnett/"
              name="LinkedIn"
            />
            {"  //  "}
            <ExternalLink
              link="https://github.com/hannaharnett"
              name="Github"
            />
            {"  //  "}
            <ExternalLink
              link="https://codepen.io/hannaharnett"
              name="Codepen"
            />
          </Div>
          <img src={ContactIllustration} alt="illustration" />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Contact;
