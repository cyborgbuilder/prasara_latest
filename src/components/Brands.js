import React, { useState } from 'react'
import styled from 'styled-components'
import LazyImage from './LazyImage';

const brands = [
    { name: 'Disney', src: 'https://www.pngall.com/wp-content/uploads/2018/05/Disney-Logo-PNG-Pic.png' },
    { name: 'lululemon', src: 'https://logos-download.com/wp-content/uploads/2016/08/Lululemon_logo.png' },
    { name: 'Polo', src: 'https://logowik.com/content/uploads/images/731_poloralphlauren.jpg' },
    { name: 'Tommy Hilfiger', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tommy_hilfig_vectorlogo.svg' },
    { name: "Victoria's Secret", src: 'https://logos-world.net/wp-content/uploads/2020/05/Victoria-Secret-Logo.png' },
    { name: 'amazon', src: 'https://pngimg.com/uploads/amazon/amazon_PNG7.png' },
    { name: 'Calvin Klein', src: 'https://logos-world.net/wp-content/uploads/2020/05/Calvin-Klein-Logo.png' },
    { name: 'Van Heusen', src: 'https://logos-download.com/wp-content/uploads/2018/08/Van_Heusen_logo_fasion.png' },
    { name: 'Guess', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guess_logo.svg' },
    { name: 'asos', src: 'https://download.logo.wine/logo/ASOS_(retailer)/ASOS_(retailer)-Logo.wine.png' },
    { name: "Levi's", src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Levi%27s_logo.svg' },
    { name: 'Dockers', src: 'https://logos-world.net/wp-content/uploads/2020/12/Dockers-Logo-2005-2018.png' },
    { name: 'H & M', src: 'https://logos-download.com/wp-content/uploads/2016/04/HM_logo_logotype_emblem.png' },
    { name: 'Abercrombie and Fitch', src: 'https://logos-world.net/wp-content/uploads/2022/11/Abercrombie-and-Fitch-Emblem.png' },
    { name: 'ATG', src: 'https://seeklogo.com/images/A/atg-glove-logo-FFE6E3D9F9-seeklogo.com.png' },
    { name: 'Tesco', src: 'https://download.logo.wine/logo/Tesco/Tesco-Logo.wine.png' },
    { name: 'Walmart', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Walmart_logo_%282025%29.svg' },
    { name: 'Nike', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_NIKE.svg' },
    { name: 'Adidas', src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png' },
    { name: 'FILA', src: 'https://logos-world.net/wp-content/uploads/2020/09/Fila-Logo.png' },
    { name: 'Hurley', src: 'https://download.logo.wine/logo/Hurley_International/Hurley_International-Logo.wine.png' },
    { name: 'Columbia', src: 'https://1000logos.net/wp-content/uploads/2020/03/Columbia-logo.png' },
    { name: 'Patagonia', src: 'https://www.pngmart.com/files/23/Patagonia-Logo-PNG-HD.png' },
    { name: 'Eddie Bauer', src: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Eddie_Bauer_logo.svg' },
    { name: 'Gerry Weber', src: './gerry.webp' },
    { name: 'next', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Next_2007-_logo.svg/2560px-Next_2007-_logo.svg.png' },
    { name: 'George', src: './george.webp' },
    { name: "macy's", src: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Macy%27s_Logo_2019.png' },
    { name: 'Marks and Spencer', src: 'https://1000logos.net/wp-content/uploads/2022/08/Marks-Spencer-logo.jpg' },
    { name: 'American Eagle', src: 'https://1000logos.net/wp-content/uploads/2020/06/American-Eagle-Logo-1985.jpg' },
    { name: 'Jack Wills', src: 'https://seeklogo.com/images/J/jack-wills-logo-7BFF210F7E-seeklogo.com.png' },
    { name: 'Walbusch', src: 'https://logovectorseek.com/wp-content/uploads/2021/10/walbusch-walter-busch-gmbh-und-co-kg-logo-vector.png' },
    { name: "Oshkosh B'gosh", src: './osh.webp' },
    { name: 'L.L. Bean', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/L.L.Bean_wordmark.svg/1024px-L.L.Bean_wordmark.svg.png' },
    { name: 'Seasalt Cornwall', src: './seasalt.webp' },
    { name: 'G A P', src: 'https://logos-world.net/wp-content/uploads/2020/09/Gap-Logo.png' },
    { name: 'Old Navy', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Old_Navy_Logo.svg' },
    { name: "Land's end", src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/LandsEnd_Logo.svg/1280px-LandsEnd_Logo.svg.png' },
];

function BrandLogo({ brand }) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return <FallbackLogo>{brand.name}</FallbackLogo>;
    }

    return (
        <img
            src={brand.src}
            alt={`${brand.name} logo`}
            loading="lazy"
            onError={() => setHasError(true)}
        />
    );
}

function Brands() {
  return (
    <Container>
      <Head>
        <div></div>
        <LazyImage
            src="./brands.webp"
            blurhash="LPMQt}xvp_ay?^WBVYWBOYkCVrs:"
            alt="Welcome"
          />
      </Head>
      <Body>
           <Header>
           <h1 style={{marginTop: "80px"}}>Brands</h1>
           
           </Header>

           {/* <Detail>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           </Detail> */}

           <Wrap>
            {brands.map((brand) => (
                <Slot key={brand.name} aria-label={`${brand.name} brand logo`}>
                    <Upper>
                        <BrandLogo brand={brand} />
                    </Upper>
                </Slot>
            ))}
           </Wrap>
      </Body>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    background: var(--main);
    overflow: hidden;

`


const Head = styled.div`
    width: 100%;
    height: 75vh;

    div{
      width: 100%;
      height: 11vh;
      background: var(--main);
    }

    @media only screen and (max-width: 1200px){
      height: 46vh;
  }

    img{
        width: 100%;
        height: 100%;
    }

`

const Body = styled.div`
    width: 100%;
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--main);

`

const Wrap = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

   

`

const Header = styled.div`
h1{
  font-size: 70px;
  text-align: center;
  color: var(--sec);
  padding: 30px 0;

  @media only screen and (max-width: 1200px){
    font-size: 42px;
  }

}



`
const Detail = styled.div`
    background: #fff;
    padding: 20px;
    


    p{

        padding: 10px;
      
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
const Slot = styled.div`
width: 200px;
height: 165px;
padding: 18px;
background: #FBFCFA;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
position: relative;
margin: 18px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;



&:hover{
    border: 1px solid #fff;
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
}


@media only screen and (max-width: 1200px){
    width: 42%;
    max-width: 200px;
    padding: 14px;
    margin: 20px 10px;
    text-align: center;
    height: 145px;
  }


h1{
    color: #fff;
    font-size: 36px;
    padding: 10px 0;
    z-index: 1000;
    border-bottom: 1px solid white;

    @media only screen and (max-width: 1200px){
        font-size: 30px;
        padding: 10px 0;
    }
}
`

const Upper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    &:hover{
        cursor: pointer;


    }

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 5px;

        @media only screen and (max-width: 1200px){
            width: 100%;

          }
    }
    
    
`

const FallbackLogo = styled.span`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sec);
    font-family: 'DM Serif Display', serif;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;

    @media only screen and (max-width: 1200px){
        font-size: 16px;
    }
`

const Down = styled.div`
    //height: 30%;
    display: none;


    h1{
        color: black;
        font-size: 20px;
        text-align: center;
        letter-spacing: 1.2px;
    }

    p{
        color: black;
        font-size: 12px;
        line-height: 1.2rem;
        text-align: center;
    }

`





export default Brands
