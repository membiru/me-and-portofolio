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
import BigText from '../components/BigText'


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

const AnimationImage = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 20vw;

  animation: ${float} 4s ease-in-out infinite;
  img{
    width: 100%;
    height: auto;
  }
`

const MainContent = styled.div`
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.secondary};
  padding: 2rem;
  width: 50vw;
  height: 60vh;

  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 0.5vw);

  backdrop-filter: blur(10px);
  position: absolute;
  right: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Source Code Pro', monospace;
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Container>
        <BrandNameComponent theme='dark'/>
        <SocialMedIcons theme='dark'/>
        <HomeButton /> 
        <ParticleComponent preset={presetParticles} />
        
        <AnimationImage>
          <img src={Image} alt="ImageContent" />
        </AnimationImage>
        <MainContent >
          Halo my name is Rizky Ananda from Indonesia. I'm interest to be a programmer. Now i'm study in University of Lambung Mangkurat, Computer Science Departement.
          <br/><br/>
          I'm a full stack developer. I'm using React, React Native, NodeJS, ExpressJS and many other technologies.
          <br/><br/>
          I'm also a fan of music and also love drawing.
        </MainContent>

        <BigText text="ABOUT" top="10%" right="5%" />
      </Container>
    </ThemeProvider>
  )
}

export default AboutPage