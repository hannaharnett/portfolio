import React, { Component } from "react";
import styled from "styled-components";

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.7rem;
  height: 1.7rem;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  :focus {
    outline: none;
  }
`;

const HamburgerButton = styled.button`
  cursor: pointer;
  height: 1.7rem;
  border: none;
  background: transparent;
  :focus > ${BurgerContainer} {
    outline: 2px solid #005fcc;
  }
  :focus {
    outline: none;
  } 
`;

const Span = styled.span`
  background-color: #000;
  border-radius: 2px;
  content: "";
  position: realitive;
  transition: all 0.4s linear;
  width: 100%;
  height: 2px;
  transform-origin: 1px;
  :focus {
    outline: none;
  }
  :nth-child(1) {
    transform: ${props => props.isOpen ? "rotate(45deg)" : "rotate(0)"};
  }
  ,
  :nth-child(2) {
    transform: ${props =>
    props.isOpen ? "translateX(150px)" : "translateX(0)"};
  }
  ,
  :nth-child(3) {
    transform: ${props =>
    props.isOpen ? "rotate(-45deg)" : "rotate(0)"};
  }
`;

class NavIcon extends Component {
  render() {
    const { isOpen, toggle } = this.props;
    return (
      <HamburgerButton
        onClick={toggle}
        aria-label="Navigation"
        aria-expanded={isOpen ? true : false}
      >
        <BurgerContainer
          tabIndex="-1"
        >
          <Span isOpen={isOpen} />
          <Span isOpen={isOpen} />
          <Span isOpen={isOpen} />
        </BurgerContainer>
      </HamburgerButton>
    );
  }
}

export default NavIcon;
