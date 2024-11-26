// File: About.js
import React from "react";
import styled from "styled-components";
import LazyImage from "./LazyImage";
import Vision from "./Vision";
import HeaderSection from "./HeaderSection";
// import BodySection from "./BodySection";
// import FooterSection from "./FooterSection";

function About() {
  return (
    <Container>
      <HeaderSection />
      {/* <BodySection />
      <FooterSection /> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: var(--main);
  overflow: hidden;
`;

export default About;
