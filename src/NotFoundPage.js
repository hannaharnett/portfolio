import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotFoundPageIllustration from "./kingdom-8.png";
import styled from "styled-components";
import Footer from "./Footer";

const Wrapper = styled.main`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  & img {
    width: 500px;
    align-self: center;
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
`;

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <img src={NotFoundPageIllustration} alt=" 404 illustration" />
          <Div>
            <h1>Hmm, that doesn't look good...</h1>
            <Link to="/">Let's try again</Link>
          </Div>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default NotFoundPage;
