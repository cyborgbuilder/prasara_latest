// File: AwardsSection.js
import React from "react";
import styled from "styled-components";
import LazyImage from "./LazyImage";

function AwardsSection() {
  const imgurl = "./award.png";

  return (
    <Awards>
      {Array.from({ length: 20 }).map((_, i) => (
        <Slot key={i}>
          <Upper>
            <LazyImage
              src={imgurl}
              blurhash="LGJH%5-O0b4_%#s+WENLNOR-x9xr"
              alt=""
            />
          </Upper>
          <Down>
            <h1>Sample Award {i + 1}</h1>
          </Down>
        </Slot>
      ))}
    </Awards>
  );
}

const Awards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;

const Slot = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    border: 1px solid #fff;
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  @media only screen and (max-width: 768px) {
    height: 200px;
  }
`;

const Upper = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const Down = styled.div`
  height: 40%;
  width: 100%;
  padding: 10px;
  background: #fff;
  opacity: 0.8;
  border-radius: 8px;
  text-align: center;

  h1 {
    color: black;
    font-size: 14px;
    margin: 5px 0;
    letter-spacing: 1.2px;

    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export default AwardsSection;
