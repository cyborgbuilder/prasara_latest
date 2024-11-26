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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Slot = styled.div`
  width: 19%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: relative;
  margin: 20px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    border: 1px solid #fff;
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  @media only screen and (max-width: 1200px) {
    width: 43%;
    margin: 10px;
    text-align: center;
    height: 220px;
  }
`;

const Upper = styled.div`
  width: 39%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    height: 60%;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    width: 40%;
  }
`;

const Down = styled.div`
  height: 40%;
  width: 100%;
  padding: 5px 15px;
  background: #fff;
  opacity: 0.8;
  border-radius: 8px;

  @media only screen and (max-width: 1200px) {
    height: 100%;
    opacity: 0.7;
  }

  h1 {
    color: black;
    font-size: 14px;
    margin: 5px 0;
    text-align: center;
    letter-spacing: 1.2px;

    @media only screen and (max-width: 1200px) {
      font-size: 12px;
    }
  }
`;

export default AwardsSection;
