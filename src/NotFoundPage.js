import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotFoundPageIllustration from "./kingdom-8.png";
import styled from "styled-components";
import Footer from "./Footer";
import PageFocus from "./PageFocus";
import { device } from "./device";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  img {
    width: 500px;
    align-self: center;
  }
  @media ${device.tablet} {
    img {
      width: 50%;
      margin-right: 0;
    }
  }
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
    }
  }
`;

const Div = styled.div`
  width: 500px;
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
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    text-decoration: underline;
  }
  @media ${device.tablet} {
    h2 {
      font-size: 3rem;
    }
    a {
      font-size: 1.2rem;
      text-decoration: underline;
    }
  }
  @media ${device.mobile} {
    width: 100%;
    text-align: center;
    & h2 {
      font-size: 2rem;
      margin: 20px 0;
    }
    & p {
      font-size: 1.4rem;
    }
  }
`;

class NotFoundPage extends Component {
  render() {
    return (
      <PageFocus headerText="Ai, something went wrong, 404 error page">
        <Wrapper>
          <img src={NotFoundPageIllustration} alt=" 404 illustration" />
          <Div>
            <h2>Hmm, that doesn't look good...</h2>
            <Link to="/">Let's try that again!</Link>
          </Div>
        </Wrapper>
        <Footer />
      </PageFocus>
    );
  }
}

export default NotFoundPage;
