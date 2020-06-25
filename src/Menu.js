import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./device";
import pdf from "./assets/HannahArnettCV.pdf";

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;
const MenuContainer = styled.section`
  height: 60%;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    text-decoration: none;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: #2568ef;
    letter-spacing: 1px;
    line-height: 1.1;
    max-width: 60%;
    a {
      color: #2568ef;
    }
    a:hover {
      color: #ee534c;
    }
  }
  h1:hover {
    color: #ee534c;
  }
  a {
    text-decoration: none;
  }
  span {
    font-size: 1.1rem;
    color: black;
  }
  @media ${device.tablet} {
    h1 {
      font-size: 3rem;
    }
  }
`;

class Menu extends Component {
  render() {
    const { clickMenu } = this.props;
    return (
      <Wrapper>
        <MenuContainer>
          <ul>
            <li>
              <h1>
                <a target="_blank" rel="noopener noreferrer" href={pdf}>
                  resume
                </a>
                <span>PDF</span>
              </h1>
            </li>
            <li onClick={clickMenu}>
              <Link to="/projects">
                <h1>projects</h1>
              </Link>
            </li>
            <li onClick={clickMenu}>
              <Link to="/contact">
                <h1>contact</h1>
              </Link>
            </li>
          </ul>
        </MenuContainer>
      </Wrapper>
    );
  }
}

export default Menu;
