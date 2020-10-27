import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./device";
import pdf from "./assets/Hannah-Arnett-Resume.pdf";

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
    display: flex;
    align-items: center;
  }
  a:hover {
    color: #e62711;
  }
  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

class Menu extends Component {
  render() {
    const { clickHandler, isOpen, menuListRef } = this.props;
    const tabIndex = isOpen ? "0" : "-1";
    return (
      <Wrapper>
        <MenuContainer>
          <ul
            role="list" /*for screen readers in Safari*/
            ref={menuListRef}
          >
            <MenuItem>
              <a tabIndex={tabIndex} target="_blank" rel="noopener noreferrer" href={pdf} aria-describedby="new-window">
                resume<span>PDF</span><img src="https://img.icons8.com/material-rounded/18/000000/external-link.png" alt="opens in new window icon" />
              </a>
              <span className="visually-hidden" id="new-window">Opens in a new window</span>
            </MenuItem>
            <MenuItem onClick={clickHandler}>
              <Link tabIndex={tabIndex} to="/projects">
                projects
              </Link>
            </MenuItem>
            <MenuItem onClick={clickHandler}>
              <Link tabIndex={tabIndex} to="/contact">
                contact
              </Link>
            </MenuItem>
            <MenuItem onClick={clickHandler}>
              <Link tabIndex={tabIndex} >
                close
              </Link>
            </MenuItem>
          </ul>
        </MenuContainer>
      </Wrapper>
    );
  }
}

export default Menu;
