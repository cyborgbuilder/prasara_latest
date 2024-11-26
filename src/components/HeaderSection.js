// File: HeaderSection.js
import React from "react";
import styled from "styled-components";
import LazyImage from "./LazyImage";

function HeaderSection() {
  return (
    <Head>
      <div></div>
      <LazyImage
        src="about3.jpg"
        blurhash="LOLXVt%htPNH~qWF%2Rj%MR*t7Ri"
        alt="Welcome"
      />
    </Head>
  );
}

const Head = styled.div`
  width: 100%;
  height: 75vh;

  div {
    width: 100%;
    height: 11vh;
    background: var(--main);
  }

  @media only screen and (max-width: 1200px) {
    height: 46vh;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default HeaderSection;
