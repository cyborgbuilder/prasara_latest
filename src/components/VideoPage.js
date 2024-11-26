import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SocialBooth from './SocialBooth'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import LazyImage from './LazyImage';
function VideoPage() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200); 

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500
  };

  useEffect(() => {
    // Add an event listener to track window width changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200); // Update isMobile state based on the breakpoint
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Container>


<Slider className='img_slider' {...settings}>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM1.jpg" 
            blurhash="L5BVV6}]0NI.,~M^E7%L0WX8=vrr"
            alt=""
            />
          ) : (
            <LazyImage src="./cover1.png" 
            blurhash="LDBLu716E+}mAV%1nhSwIqIoSejG"
            alt="" />
          )}
          </div>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM2.jpg" 
            blurhash="LKHn:FRi4ot2~p%KR:M_00%Lx]IU"
            alt=""  />
          ) : (
            <LazyImage src="./cover2.png" 
            blurhash="LKF~Bl00Iq~o9Z-:MyjD4ntRXSni"
            alt="" />
          )}
          </div>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM3.jpg" 
            blurhash="LACP;os#RXDhysNCRCt10M-+EOx["
            alt=""  />
          ) : (
            <LazyImage src="./cover3.png" 
            blurhash="L9DcLE00u6.300~oiJX258E0EM?H"
            alt="" />
          )}
          </div>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM4.jpg" 
            blurhash="L3C5}7E800_29q,k0o${02.2uPQ-"
            alt=""  />
          ) : (
            <LazyImage src="./cover4.png" 
            blurhash="L5A+]l06-U~AOu$^EN^d00KKSiMx"
            alt="" />
          )}
          </div>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM5.jpg" 
            blurhash="LiCtFex^9Fa0.TXRMys9jJV=ogoz"
            alt=""  />
          ) : (
            <LazyImage src="./cover5.png" 
            blurhash="LQBq3+8wMd?^X:iunjXlDib^o~Vq"
            alt="" />
          )}
          </div>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM6.jpg" 
            blurhash="LEDc5z4nJ6x;yXR*RQov00_NM{ic"
            alt=""  />
          ) : (
            <LazyImage src="./cover6.png" 
            blurhash="L8C6iu00_N?G0e_38_%e00%$ITNF"
            alt="" />
          )}
          </div>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM7.jpg" 
            blurhash="L8D+un%d0mmk?]tLa6f#00%0VXyX"
            alt=""  />
          ) : (
            <LazyImage src="./cover7.png" 
            blurhash="L9CY|700I^~85k%MrVb^0KOXJ+xb"
            alt="" />
          )}
          </div>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM8.jpg" 
            blurhash="LSGuB.0f9H-l_NM^IXt20=^gV]Ip"
            alt=""  />
          ) : (
            <LazyImage src="./cover8.png" 
            blurhash="LMD+i900~BXlKl#iEO%K0M?ZE2kW"
            alt="" />
          )}
          </div>
          <div>
          {isMobile ? (
            <LazyImage src="./coverM9.jpg" 
            blurhash="LmI5ojITD*oH?wR$IVxs9HtONKoy"
            alt=""  />
          ) : (
            <LazyImage src="./cover9.png" 
            blurhash="LLGb-x00tT_MbyoYMf.69HtPIqxs"
            alt="" />
          )}
          </div>
        </Slider>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-height: 89vh;
  position: relative;


  div{
    width: 100%;
    height: 89vh;  
    
    @media only screen and (max-width: 1200px){
      height: 65vh;

    }
  }
 

  img{
    width: 100%;
    height: 89vh;

    @media only screen and (max-width: 1200px){
      height: 65vh;

    }
    
  }

  
 

`

const Arrow = styled.div`
  width: 5%;
  position: absolute;
  bottom: 30px;
  left: 48%;
  animation: example 2s infinite linear;

  @media only screen and (max-width: 1200px){
    width: 24%;
    left: 40%;
  }
  img{
    width: 100%;
  }
`
export default VideoPage
