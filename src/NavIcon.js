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
      transform: ${props => (props.istoggleon ? "rotate(45deg)" : "rotate(0)")};
    }
    ,
    :nth-child(2) {
      transform: ${props =>
        props.istoggleon ? "translateX(150px)" : "translateX(0)"};
    }
    ,
    :nth-child(3) {
      transform: ${props =>
        props.istoggleon ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

class NavIcon extends Component {
  render() {
    const { istoggleon, closeNav, openNav } = this.props;
    return (
      <Wrapper
        istoggleon={istoggleon}
        onClick={istoggleon ? closeNav : openNav}
      >
        <span />
        <span />
        <span />
      </Wrapper>
    );
  }
}

export default NavIcon;
