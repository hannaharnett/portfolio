import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import NavIcon from "./NavIcon";
import FocusLock from 'react-focus-lock';

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuListRef = useRef(null);

  const overlayStyle = isOpen ? { width: "100%", transition: "0.8s" } : { width: 0, transition: "0.8s" };

  const clickHandler = (event) => {
    setIsOpen(!isOpen);
  }

  const keyHandler = (event) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      // allows animation to finish before moving focus to first link in menu
      const focus = setTimeout(() =>
        menuListRef.current.querySelector('a').focus(), 500
      );
      return () => clearTimeout(focus);
    }
  }, [isOpen]);
  return (
    <header onKeyUp={keyHandler}>
      <FocusLock disabled={!isOpen}>
        <Nav>
          <Link
            to="/"
            onClick={isOpen ? clickHandler : null}
            aria-label="Logo"
            aria-describedby="return-home-btn"
          >
            hannaharnett
            </Link>
          <p className="visually-hidden" id="return-home-btn">This link takes you back to the homepage</p>
          <NavIcon
            isOpen={isOpen}
            toggle={clickHandler}
          />
        </Nav>
        <Overlay style={overlayStyle}>
          <Menu clickHandler={clickHandler} isOpen={isOpen} menuListRef={menuListRef} />
        </Overlay>
      </FocusLock>
    </header>
  )
}

export default Navbar;
