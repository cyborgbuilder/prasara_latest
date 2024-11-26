import React from 'react'
import VideoPage from './VideoPage'
import styled from 'styled-components'
import Slogan from './Slogan'
import BlackPage from './BlackPage'

import Welcome from './Welcome'
import Certify from './Certify'
import FaceContact from './FaceContact'
import FaceAbout from './FaceAbout'
import Blank from './Blank'

function Home() {
  return (
    <Container>
      <BlackPage />
      <VideoPage />
      
      <Welcome />
      <FaceAbout />
      
      <Slogan />
      <Certify />
      
      
      <FaceContact />
      <Blank />
      
      {/* <FaceSustainability /> */}
      

      
    </Container>
  )
}


const Container = styled.div`
  iwdth: 100%;
  overflow: hidden;

`

export default Home
