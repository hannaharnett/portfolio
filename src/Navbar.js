import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import NavIcon from "./NavIcon";

const Nav = styled.nav`
  display: flex;
  height: 90px;
  justify-content: space-between;
  color: black;
  background: transparent;
  a {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 0;
  background: white;
  overflow-x: hidden;
`;

let OverlayStyle = {
  width: 0,
  transition: ""
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.clickMenu = this.clickMenu.bind(this);
  }
  openNav() {
    OverlayStyle = { width: "100%", transition: "0.8s" };
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }
  closeNav() {
    OverlayStyle = { width: 0, transition: "0.8s" };
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }
  clickMenu() {
    OverlayStyle = { width: 0, transition: "" };
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }
  render() {
    const { isToggleOn } = this.state;
    return (
      <header>
        <Nav>
          <Link
            to="/"
            istoggleon={isToggleOn}
            onClick={isToggleOn ? this.clickMenu : null}
            aria-label="Return to homepage"
          >
            hannaharnett
          </Link>
          <NavIcon
            istoggleon={isToggleOn}
            openNav={this.openNav}
            closeNav={this.closeNav}
          />
        </Nav>
        <Overlay style={OverlayStyle}>
          <Menu clickMenu={this.clickMenu} isToggleOn={isToggleOn} />
        </Overlay>
      </header>
    );
  }
}

export default Navbar;
