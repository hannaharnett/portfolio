import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import NavIcon from "./NavIcon";

const Nav = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
  font-size: 1.5rem;
  color: black;
  background: transparent;
  & a {
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
  & div {
    margin: 50px 80px;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      style: {
        width: 0,
        transition: ""
      }
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.clickMenu = this.clickMenu.bind(this);
  }
  openNav() {
    const style = { width: "100%", transition: "0.8s" };
    this.setState({ style, isToggleOn: !this.state.isToggleOn });
  }
  closeNav() {
    const style = { width: 0, transition: "0.8s" };
    this.setState({ style, isToggleOn: !this.state.isToggleOn });
  }
  clickMenu() {
    const style = { width: 0, transition: "" };
    this.setState({ style, isToggleOn: !this.state.isToggleOn });
  }
  render() {
    return (
      <div>
        <Nav>
          <h4>
            <Link
              to="/"
              isToggleOn={this.state.isToggleOn}
              onClick={this.closeNav}
            >
              hannaharnett
            </Link>
          </h4>
          <NavIcon
            isToggleOn={this.state.isToggleOn}
            openNav={this.openNav}
            closeNav={this.closeNav}
          />
        </Nav>
        <Overlay ref="snav" style={this.state.style}>
          <div>
            <Menu clickMenu={this.clickMenu} onClick={this.closeNav} />
          </div>
        </Overlay>
      </div>
    );
  }
}

export default Navbar;
