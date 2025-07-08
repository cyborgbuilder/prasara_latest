import React from "react";
import styled from "styled-components";
import LazyImage from "./LazyImage";

function Certify() {
  return (
    <Container>
      <Wrap>
        <Left>
          <h1>ACCREDITATIONS AND CERTIFICATIONS</h1>
          <p>
            Experience a peace of mind through our certified washing plant
            services. We are an accredited service provider with global
            accolades and are committed to upholding the highest industry
            standards.
          </p>
        </Left>
        <Right>
          <Slot>
            <LazyImage
              src="./1.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./1.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./2.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./2.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./3.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./3.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./4.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./4.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./5.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./5.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./6.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./6.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./7.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./7.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./12.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./12.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./8.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./8.webp' /> */}
          </Slot>
          <Slot>
            <LazyImage
              src="./9.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./9.webp' /> */}
          </Slot>
          <Slot>
            <img src="./10.webp" />
          </Slot>
          <Slot>
            <LazyImage
              src="./11.webp"
              blurhash="L071l@_300IU00IU9FM{00D%%M-;"
              alt=""
            />
            {/* <img src='./11.webp' /> */}
          </Slot>
        </Right>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  background: var(--main);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`;
const Wrap = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Left = styled.div`
  padding: 20px;
  padding: 50px 0;

  h1 {
    color: var(--sec);
    text-transform: uppercase;
    font-size: 36px;
    padding: 40px 0;
    text-align: center;
    letter-spacing: 1.3px;

    @media only screen and (max-width: 1200px) {
      font-size: 30px;
      padding: 10px 0;
    }
  }

  p {
    text-align: center;
    color: #585858;
    line-height: 2.1rem;

    @media only screen and (max-width: 1200px) {
      font-size: 16px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Slot = styled.div`
    width: 200px; 
    height: 200px;
    border-radius: 5px;
    margin: 30px 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media only screen and (max-width: 1200px){
        width 120px;
        height: 120px;
        margin: 10px 15px;
        padding: 10px;
    }

    img{
      width: 80%;
  }

`;

export default Certify;
