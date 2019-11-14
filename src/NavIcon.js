import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.7rem;
  height: 1.7rem;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  span {
    background-color: #000;
    border-radius: 2px;
    content: "";
    position: realitive;
    transition: all 0.4s linear;
    width: 100%;
    height: 2px;
    transform-origin: 1px;
    :nth-child(1) {
      transform: ${props => (props.isToggleOn ? "rotate(45deg)" : "rotate(0)")};
    }
    ,
    :nth-child(2) {
      transform: ${props =>
        props.isToggleOn ? "translateX(150px)" : "translateX(0)"};
    }
    ,
    :nth-child(3) {
      transform: ${props =>
        props.isToggleOn ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

class NavIcon extends Component {
  render() {
    return (
      <Wrapper
        isToggleOn={this.props.isToggleOn}
        onClick={
          this.props.isToggleOn ? this.props.closeNav : this.props.openNav
        }
      >
        <span />
        <span />
        <span />
      </Wrapper>
    );
  }
}

export default NavIcon;
