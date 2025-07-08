import React from 'react'
import styled from 'styled-components'
import LazyImage from './LazyImage'

function Welcome() {
  return (
    <Container>
        <Left>
            <h1>Welcome to Prasara Washing Plant ! </h1>
            <p> Where Quality Meets Perfection! Discover our state-of-the-art facility and unrivaled expertise in the washing industry. Trust us to revitalize your belongings with our meticulous care and commitment to excellence. Experience the ultimate satisfaction that comes with choosing Prasara Washing Plant.</p>
        </Left>
        <Right>

           <div>
           <LazyImage
            src="./main2.webp"
            blurhash="LaI}q+W?_N-;%gRjRjxus.kCIoWA"
            alt="Welcome"
          />
           </div>
        </Right>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background: var(--main);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media only screen and (max-width: 1200px){
        flex-direction: column;
        height: 92vh;
        margin: 0;
        padding-top: 30px;
      }
`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    border: 1px solid white;

`
const Left = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url('./main__1.webp');
    background-size: cover;
    padding: 20px;
    z-index: 100;

    @media only screen and (max-width: 1200px){
        width: 100%;
        padding: 20px;
      }
    
    h1{
        text-align: center;
        color: var(--sec);
        margin: 20px 0;
        //font-family: 'Moirai One', cursive;
        font-size: 36px;

        @media only screen and (max-width: 1200px){
            font-size: 30px;    
        }

       
    }

    p{
        text-align: center;
        line-height: 2.1rem;  

        @media only screen and (max-width: 1200px){
            font-size: 16px;    
        }
    }

`

const Right = styled.div`
    width: 50%;
    height: 100%;

    @media only screen and (max-width: 1200px){
        width: 100%;
      }

      div{
        width: 100%;
        height: 100%;
      }

    img{
        width: 100%;
        height: 100%;
    }
`

export default Welcome