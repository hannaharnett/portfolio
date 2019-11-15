import React from "react";
import ExternalLink from "./ExternalLink";
import styled from "styled-components";

const FooterDiv = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  bottom: 0;
  a {
    color: #000;
    font-size: 1rem;
  }
`;

const Footer = () => (
  <FooterDiv>
    <ExternalLink link="https://icons8.com" name="Illustrations by Ouch.pics" />
  </FooterDiv>
);

export default Footer;
