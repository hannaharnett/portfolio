import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./device";
import pdf from "./assets/HannahArnettCV.pdf";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const MenuContainer = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  margin: 50px 80px;
  ul {
    list-style: none;
    text-decoration: none;
  }
  span {
    font-size: 1.1rem;
    color: black;
  }
  a {
    text-decoration: none;
  }
  @media ${device.mobile} {
    margin: 40px 50px;
  }
`;

const MenuItem = styled.li`
  font-family: "Montserrat", sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.1;
  max-width: 60%;
  a {
    color: #2568ef;
    text-decoration: none;
  }
  a:hover {
    color: #ee534c;
  }
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

class Menu extends Component {
  render() {
    const { clickMenu, isToggleOn } = this.props;
    return (
      <Wrapper>
        <MenuContainer>
          <ul>
            <MenuItem>
              <a tabIndex={isToggleOn ? "0" : "-1"} target="_blank" rel="noopener noreferrer" href={pdf}>
                resume<span>PDF</span>
              </a>
            </MenuItem>
            <MenuItem onClick={clickMenu}>
              <Link tabIndex={isToggleOn ? "0" : "-1"} to="/projects">
                projects
              </Link>
            </MenuItem>
            <MenuItem onClick={clickMenu}>
              <Link tabIndex={isToggleOn ? "0" : "-1"} to="/contact">
                contact
              </Link>
            </MenuItem>
          </ul>
        </MenuContainer>
      </Wrapper>
    );
  }
}

export default Menu;
