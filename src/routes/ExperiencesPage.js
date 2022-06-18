import React from 'react'
import ParticleComponent from '../components/ParticleComponent'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

import { myTheme } from '../themes/Theme'
import BrandNameComponent from '../components/BrandNameComponent'
import SocialMedIcons from '../components/SocialMedIcons'
import HomeButton from '../components/HomeButton'
import BigText from '../components/BigText'

import presetParticles from "../config/tsparticles-presets/nyancat.json"

const MainContainer = styled(motion.div)`
  
`

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;

  z-index: 10;
`
const Item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

const ExperiencesPage = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <MainContainer
      variants={Item}
      initial='hidden'
      animate='show'
      exit={{
        opacity: 0, transition: { duration: 0.5 }
      }}>

      
        <ParticleComponent preset={presetParticles} />
        <Container>
          <BrandNameComponent />
          <SocialMedIcons />
          <HomeButton />
          
          <BigText top='60%' right='20%' text='COMING SOON'/>
        </Container>


      </MainContainer>
    </ThemeProvider>
  )
}

export default ExperiencesPage