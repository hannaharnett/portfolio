import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import NavIcon from "./NavIcon";
import { device } from "./device";

const Nav = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
  color: black;
  background: transparent;
  h1 {
    font-size: 1.5rem;
  }
  a {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    color: black;
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 1;
  top: 100px;
  left: 0;
  background: white;
  overflow-x: hidden;
  div {
    margin: 50px 80px;
  }
  @media ${device.mobile} {
    div {
      margin: 40px 50px;
    }
  }
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
      <div>
        <Nav>
          <h1>
            <Link
              to="/"
              istoggleon={isToggleOn}
              onClick={isToggleOn ? this.clickMenu : null}
              aria-label="Return to homepage"
            >
              hannaharnett
            </Link>
          </h1>
          <NavIcon
            istoggleon={isToggleOn}
            openNav={this.openNav}
            closeNav={this.closeNav}
          />
        </Nav>
        <Overlay style={OverlayStyle}>
          <div>
            <Menu clickMenu={this.clickMenu} isToggleOn={isToggleOn} />
          </div>
        </Overlay>
      </div>
    );
  }
}

export default Navbar;
