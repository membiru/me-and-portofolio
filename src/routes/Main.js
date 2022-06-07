import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

import HomeButton from '../components/HomeButton'
import BrandNameComponent from '../components/BrandNameComponent'
import SocialMedIcons from '../components/SocialMedIcons'
import { MainLogo } from '../components/Svgs'
import IntroComponent from '../components/IntroComponent'



const MainContainer = styled.div`
  background: ${props => props.theme.secondary};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 800;
  }
`
const Container = styled.div`
  padding: 2rem;
`

const ButtonContact = styled.a`
  position: absolute;
  color: ${props => props.isClick? props.theme.secondary: props.theme.primary};
  text-decoration: none;

  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1; 
`

const ButtonVideos = styled(NavLink)`
  color: ${props => props.isClick ? props.theme.secondary : props.theme.primary};
  text-decoration: none;
  position: absolute;

  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
`

const ButtonExperiences = styled(NavLink)`
  color: ${props => props.theme.primary};
  text-decoration: none;
  position: absolute;

  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
`

const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;

  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
`

const ButtonSkills = styled(NavLink)`
  color: ${props => props.theme.primary};
  text-decoration: none;
  z-index: 1;
`
const ButtonAbout = styled(NavLink)`
  color: ${props => props.isClick ? props.theme.secondary : props.theme.primary};
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  } to{
    transform: rotate(360deg);
  }
`


const CenterImage = styled.button`
  position: absolute;
  top: ${props => props.isClick ? '85%' : '50%'};
  left: ${props => props.isClick ? '8%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;  
 
  z-index: 3;
  &>:first-child{
    animation: ${rotate} 3s linear infinite;
    fill: ${props => props.theme.primary};
  }

  &>:last-child{
    display: ${props => props.isClick ? 'none' : 'inline-block'};
    padding-top: 0rem;
    font-size: calc(0.2rem + 1vw);
    font-weight: 100;
    color: ${props => props.theme.primary};
  }
`

const DarkContainer = styled.div`
  position: absolute;
  background: ${props => props.theme.primary};
  top: 0;
  bottom: 0;
  width: ${props => props.isClick ? '50%' : '0%'};
  height: ${props => props.isClick ? '100%' : '0%'};
  left: 50%;

  z-index: 1;
  transition: height 0.8s ease, width 0.8s ease 0.5s;
`



const Main = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <MainContainer>
      <DarkContainer isClick={click} />
      <Container>
        <HomeButton />
        <BrandNameComponent />
        <SocialMedIcons theme={click? 'dark': 'light'}/>
        <CenterImage onClick={()=>handleClick()} isClick={click}>
          <MainLogo width={click ? 100: 250} height={click ? 100: 250} />
          <span>touch me</span>
        </CenterImage>

        <ButtonContact isClick={click} target="_blank" href="mailto:rizkyananda007@gmail.com" rel="noopener noreferrer">
          <motion.h2 
          whileHover={{scale: 1.4}}
          whileTap={{scale: 0.9}}
          >
            Hello there ...
          </motion.h2>
        </ButtonContact>

        <ButtonVideos to={"/videos"} isClick={click}>
          <motion.h2 
          whileHover={{scale: 1.4}}
          whileTap={{scale: 0.9}} 
          >
            VIDEOS
          </motion.h2>

        </ButtonVideos>
        

        <ButtonExperiences to={"/experiences"} >
          <motion.h2 
          whileHover={{scale: 1.4}}
          whileTap={{scale: 0.9}} 
          >
            EXPERIENCES

          </motion.h2>
        </ButtonExperiences>

        <FooterContainer>
          <ButtonSkills to={"/skills"} >
            <motion.h2 
            whileHover={{scale: 1.4}}
            whileTap={{scale: 0.9}} 
            >
              Skills.
            
            </motion.h2>
          </ButtonSkills>


          <ButtonAbout to={"/about"} isClick={click}>
            <motion.h2 
            whileHover={{scale: 1.4}}
            whileTap={{scale: 0.9}} 
            >
              About.
              
            </motion.h2>
          </ButtonAbout>


        </FooterContainer>
      </Container>
      {click ? <IntroComponent isClick={click} /> : null}
    </MainContainer>
  )
}

export default Main
