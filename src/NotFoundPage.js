import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotFoundPageIllustration from "./kingdom-8.png";
import styled from "styled-components";
import Footer from "./Footer";
import { device } from "./device";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  & img {
    width: 500px;
    align-self: center;
  }
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    & img {
      width: 100%;
    }
  }
  @media ${device.tablet} {
    & img {
      width: 50%;
      margin-right: 0;
    }
  }
`;

const Div = styled.section`
  width: 500px;
  align-self: center;
  font-size: 1.4rem;
  h1 {
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
  @media ${device.mobile} {
    width: 100%;
    text-align: center;
    & h1 {
      font-size: 2rem;
      margin: 20px 0;
    }
    & a {
      font-size: 1.2rem;
    }
    & p {
      font-size: 1.4rem;
    }
  }
  @media ${device.tablet} {
    h1 {
      font-size: 3rem;
    }
    a {
      font-size: 1.2rem;
    }
  }
`;

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <img src={NotFoundPageIllustration} alt=" 404 illustration" />
          <Div>
            <h1>Hmm, that doesn't look good...</h1>
            <Link to="/">Let's try that again!</Link>
          </Div>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default NotFoundPage;
