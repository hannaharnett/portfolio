import React from "react";
import ExternalLink from "./ExternalLink";
import styled from "styled-components";
import { device } from "./device";

const FooterDiv = styled.div`
  position: fixed;
  display: flex;
  height: 60px;
  width: 100%;
  bottom: 0;
  a {
    color: #000;
    font-size: 1rem;
  }
  @media ${device.mobile} {
    position: relative;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => (
  <FooterDiv>
    <ExternalLink link="https://icons8.com" name="Illustrations by Ouch.pics" />
  </FooterDiv>
);

export default Footer;
