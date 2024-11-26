// File: About.js
import React from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import MainContent from "./MainContent";
// import AwardsSection from "./AwardsSection";

function About() {
  return (
    <Container>
      <HeaderSection />
      <MainContent />
      {/* <AwardsSection /> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: var(--main);
  overflow: hidden;
`;

export default About;
