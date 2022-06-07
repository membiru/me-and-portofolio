import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { myTheme } from '../themes/Theme'
import BrandNameComponent from '../components/BrandNameComponent'
import SocialMedIcons from '../components/SocialMedIcons'
import HomeButton from '../components/HomeButton'
import ParticleComponent from '../components/ParticleComponent'
import Image from '../assets/images/profile-img.png'

import presetParticles from "../config/tsparticles-presets/snow.json"
import { keyframes } from 'styled-components'


const Container = styled.div`
  background: ${props => props.theme.primary};
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(-10px) }
  100% { transform: translateY(-10px) }
`

const SpacemanImage = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 20vw;

  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;
  img{
    width: 100%;
    height: auto;
  }
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrandNameComponent theme='dark'/>
      <SocialMedIcons theme='dark'/>
      <HomeButton /> 
      <ParticleComponent preset={presetParticles} />
      
      <SpacemanImage>
        <img src={Image} alt="ImageContent" />
      </SpacemanImage>
      <Container>
        

      </Container>
    </ThemeProvider>
  )
}

export default AboutPage