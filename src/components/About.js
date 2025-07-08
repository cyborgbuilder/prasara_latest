import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Vision from "./Vision";
function About() {
  const imgurl = "./award.webp";
  return (
    <Container>
      <Head>
        <div></div>
        <img src="about3.webp" alt="Welcome" />
      </Head>
      <Body>
        <Wrap>
          <Header>
            <h1>About Us</h1>
          </Header>
          <Title>
            <h1>Who are we</h1>
            <div class="loader">
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
            </div>
          </Title>

          <Header>
            <p>
              Established in 1992, Prasara Washing Plant (PVT) LTD has
              persistently developed and emerged as one of the leading washing
              plants in the industry consolidating its status. We have expanded
              our operations over the years, acquired the trust and loyalty of
              our valued customers. As a testament to our success, we have
              achieved numerous accolades that reflect our commitment to
              excellence.
            </p>
          </Header>

          <Awards>
            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  NorLanka Vendor Award (2022)<br></br> Winner <br></br>Supply
                  Chain Partner (Washing)
                </h1>
              </Down>
            </Slot>
            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  Sri Lanka Entrepreneur of the Year (2002)<br></br> (National
                  Gold Award)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  Sri Lanka Entrepreneur of the Year (2001)<br></br>(National
                  Silver Award)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  Sri Lanka National Quality Award <br></br>(2006)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  CNCI Achiever of Industrial Excellence (2007)<br></br>Gold
                  Award
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  National Cleaner Production Award (2007) <br></br>(Raw
                  Material Efficiency)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  National Cleaner Production Award (2007)<br></br>(Energy
                  Efficiency)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  National Cleaner Production Award <br></br>(2007)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  National Occupational Safety & Health Excellence Award
                  <br></br>(2016)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  “Wayamba Wijayabhimani” Best Productive Enterprise Award
                  <br></br>(2014)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  “Wayamba Wijayabhimani” Best Enterprise Award<br></br>(2014)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  Thambapanni Abimani Award Hall of Fame<br></br>(2018)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  National Business Excellence Award (2007) <br></br>Runners Up
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  Industrial Safety Award (2008) <br></br>Runners Up
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  National Productivity Award(2006)<br></br>Runners Up
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  Provincial Productivity Award(2006) <br></br>Runners Up
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img
                  src={imgurl}
                  blurhash="LGJH%5-O0b4_%#s+WENLNOR-x9xr"
                  alt=""
                />
              </Upper>
              <Down>
                <h1>
                  Sri Lanka Entrepreneur of the Year (2000)<br></br>(Provincial
                  Silver Award)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  Sri Lanka Entrepreneur of the Year (2001)<br></br> (Provincial
                  Silver Award)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>
              <Down>
                <h1>
                  National Safety Award for the safest work place Merit Award
                  (2006)
                </h1>
              </Down>
            </Slot>

            <Slot>
              <Upper>
                <img src={imgurl} alt="" />
              </Upper>

              <Down>
                <h1>Takai Akimoto 5s Merit Award (2002)</h1>
              </Down>
            </Slot>
          </Awards>

          <Video>
            <h1>We Are On Youtube</h1>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/X4FIgdIltGQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Video>

          <Title>
            <h1>Operating Ethically</h1>
            <div class="loader">
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
              <div class="loader-square"></div>
            </div>
          </Title>

          <Vision />
        </Wrap>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background: var(--main);
  overflow: hidden;
`;

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
  h1 {
    font-size: 70px;
    text-align: center;
    color: var(--sec);

    @media only screen and (max-width: 1200px) {
      font-size: 42px;
    }
  }

  p {
    padding: 50px 100px;

    line-height: 2.1rem;
    letter-spacing: 2.1px;
    text-align: center;

    @media only screen and (max-width: 1200px) {
      font-size: 16px;
      text-align: center;

      padding: 10px;
    }
  }
`;

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
    width: 90%;
  }
`;

const Down = styled.div`
    height: 40%;
    width: 100%;
    padding: 5px 15px;
    background: #fff;
    opacity: 0.8;
    border-radius: 8px;

    @media only screen and (max-width: 1200px){
      height: 100%;
      opacity: 0.7;
    }


    h1{
        color: black;
        font-size: 14px;
        margin: 5px 0;
        text-align: center;
        letter-spacing: 1.2px;

        @media only screen and (max-width: 1200px){
          font-size: 12px;
        }
      
    }

    p{
        color: black;
        font-size: 12px;
        line-height: 1.2rem;
        text-align: center;

        @media only screen and (max-width: 1200px){
            font-size: 10px;
          }

`;

const Video = styled.div`
  width: 80%;
  height: 550px;
  margin-bottom: 200px;
  margin-top: 50px;

  h1 {
    margin: 50px 0;
    text-align: center;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: 300px;
    margin-top: 0px;
    margin-bottom: 150px;
  }
`;

const Title = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(145deg, transparent 35%, var(--sec), var(--sec)) border-box;
  border: 2px solid transparent;
  border-radius: 16px;
  margin: 40px 0;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 1200px) {
    width: 95%;
  }

  h1 {
    padding: 10px;
    color: var(--sec);
    margin-left: 20px;

    @media only screen and (max-width: 1200px) {
      font-size: 24px;
    }
  }
`;

export default About;
