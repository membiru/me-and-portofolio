import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { myTheme } from '../themes/Theme'
import { DesignLogo, DevelopeLogo } from '../components/Svgs'
import BrandNameComponent from '../components/BrandNameComponent'
import SocialMedIcons from '../components/SocialMedIcons'
import HomeButton from '../components/HomeButton'
import ParticleComponent from '../components/ParticleComponent'

import presetParticles from "../config/tsparticles-presets/char.json"
import BigText from '../components/BigText'


const Container = styled.div`
  background: ${props => props.theme.primary};
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Grid = styled.div`
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.primary};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  line-height: 1.5;

  font-family: 'Ubuntu', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
  z-index: 3;

  &:hover{
    color: ${props => props.theme.primary};
    background: ${props => props.theme.secondary};
  }
`
const TitleContent = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  fill: ${props => props.theme.secondary};
  ${Grid}: hover &{
    &>*{
      fill: ${props => props.theme.primary};
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }
`
const DescContent = styled.div`
  color: ${props => props.theme.secondary};
  font-size: calc(0.5em + 1vw);
  padding: 0.5rem 0;

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul, p {
    margin-left: 2rem;
  }

  ${Grid}: hover &{
    color: ${props => props.theme.primary};
  }
`



const SkillsPage = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrandNameComponent theme='dark'/>
      <SocialMedIcons theme='dark'/>
      <HomeButton /> 
      <ParticleComponent preset={presetParticles} />

      <Container>
        <Grid>
          <TitleContent>
            <DevelopeLogo width={36} height={36}/> Programming
          </TitleContent>
          
          <DescContent>
            I've studied various programming languages in college and many bootcamp. From web to mobile, I've learned a lot of things.
          </DescContent>

          <DescContent>
            <strong> Skills </strong>
            <p>HTML, JS, PHP, Kotlin, Java, SASS, CodeIgniter, React, Firebase etc.</p>
          </DescContent>

          <DescContent>
            <strong> Tools </strong>
            <p> VSC, Android Studio, Github etc.</p>
          </DescContent>

        </Grid>
        
        <Grid>
          <TitleContent>
            <DesignLogo width={36} height={36} /> Design
          </TitleContent>
          
          <DescContent>
            Basically, I like to draw since I was little. I tried to learn design for the first time using a vector-based tool, with Adobe Illustrator.          </DescContent>
          <DescContent>
            <strong> I like to Design </strong>
            <ul>
                <li>
                    Illustrate
                </li>
                <li>
                    Mobile and Web Design
                </li>
            </ul>
          </DescContent>
          
          <DescContent>
            <strong> Tools </strong>
            <ul>
              <li>
                Adobe Ilustator
              </li>
              <li>
                Figma 
              </li>
            </ul>
          </DescContent>

        </Grid>

        <BigText top='80%' right='30%' text='SKILLS'/>
      </Container>
    </ThemeProvider>
  )
}

export default SkillsPage