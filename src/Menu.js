import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./device";

const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;
const MenuContainer = styled.section`
  height: 60%;
  display: flex;
  align-items: center;
  & ul {
    list-style: none;
    text-decoration: none;
  }
  ,
  & h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: #2568ef;
    letter-spacing: 1px;
    line-height: 1.1;
    max-width: 60%;
  }
  h1:hover {
    color: #ee534c;
  }
  ,
  & a {
    text-decoration: none;
  }
  ,
  & span {
    font-size: 1.1rem;
    color: black;
  }
  @media ${device.mobile} {
    h1 {
      font-size: 3rem;
    }
  }
  @media ${device.tablet} {
    h1 {
      font-size: 3rem;
    }
  }
`;

class Menu extends Component {
  render() {
    return (
      <Wrapper>
        <MenuContainer>
          <ul>
            <li onClick="">
              <Link to="/files/fakeResume.pdf" target="_blank" download>
                <h1>
                  resume<span>PDF</span>
                </h1>
              </Link>
            </li>
            <li onClick={this.props.clickMenu}>
              <Link to="/projects">
                <h1>projects</h1>
              </Link>
            </li>
            <li onClick={this.props.clickMenu}>
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
