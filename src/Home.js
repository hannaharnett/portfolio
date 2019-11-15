import React, { Component } from "react";
import styled from "styled-components";
import HomeIllustration from "./kingdom-upgrade-account.png";
import ExternalLink from "./ExternalLink";

const Wrapper = styled.main`
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const HalfOfPage = styled.div`
  font-size: 1.4rem;
  img {
    width: 450px;
    margin-right: 60px;
  }
`;

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.1;
  margin-bottom: 10px;
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Section>
          <HalfOfPage>
            <Title>Hullo! I'm Hannah, Portland based web developer.</Title>
            <ExternalLink
              link="https://github.com/hannaharnett"
              name="Github"
            />
            {"  //  "}
            <ExternalLink
              link="https://www.linkedin.com/in/hannah-arnett/"
              name="LinkedIn"
            />
          </HalfOfPage>
          <HalfOfPage>
            <img src={HomeIllustration} alt="illustration" />
          </HalfOfPage>
        </Section>
        <ExternalLink
          link="https://icons8.com"
          name="Illustration by Ouch.pics"
        />
      </Wrapper>
    );
  }
}

export default Home;
