// File: MainContent.js
import React from "react";
import styled from "styled-components";
import Vision from "./Vision";

function MainContent() {
  return (
    <Body>
      <Wrap>
        <Header>
          <h1>About Us</h1>
        </Header>
        <Title>
          <h1>Who are we</h1>
          <div className="loader">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="loader-square"></div>
            ))}
          </div>
        </Title>

        <Header>
          <p>
            Established in 1992, Prasara Washing Plant (PVT) LTD has
            persistently developed and emerged as one of the leading washing
            plants in the industry consolidating its status.
          </p>
        </Header>

        <Video>
          <h1>We Are On Youtube</h1>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/X4FIgdIltGQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Video>

        <Title>
          <h1>Operating Ethically</h1>
          <div className="loader">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="loader-square"></div>
            ))}
          </div>
        </Title>

        <Vision />
      </Wrap>
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--main);
`;

const Wrap = styled.div`
  width: 95%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.div`

h1{
  font-size: 70px;
  text-align: center;
  color: var(--sec);

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}

p{

  padding: 50px 100px;

  line-height: 2.1rem;
  letter-spacing: 2.1px;
  text-align: center;

  @media only screen and (max-width: 1200px){
    font-size: 16px;
    text-align: center;
  
    padding: 10px;

  }
}

`
const Video = styled.div`
    width: 80%;
    height: 550px;
    margin-bottom: 200px ;
    margin-top: 50px;
    
    h1{
        margin: 50px 0;
        text-align: center;
    }

    @media only screen and (max-width: 1200px){
        width: 100%;
      height: 300px;
      margin-top: 0px ;
      margin-bottom: 150px;
  }



`

const Title = styled.div`
    
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(#fff, #fff) padding-box,linear-gradient(145deg, transparent 35%,var(--sec), var(--sec)) border-box;
    border: 2px solid transparent;
    border-radius: 16px;
    margin: 40px 0;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    
    @media only screen and (max-width: 1200px){
        width: 95%;
    }

    h1{
        padding: 10px;
        color: var(--sec);
        margin-left: 20px;

        @media only screen and (max-width: 1200px){
          font-size: 24px;
      }
    }

`


// Other styled components (Header, Title, Video) remain unchanged
export default MainContent;
