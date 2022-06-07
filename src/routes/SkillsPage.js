import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { LightMode } from '../themes/Theme'
import { DesignLogo, DevelopeLogo } from '../components/Svgs'
import BrandNameComponent from '../components/BrandNameComponent'
import SocialMedIcons from '../components/SocialMedIcons'
import HomeButton from '../components/HomeButton'
import ParticleComponent from '../components/ParticleComponent'

const Container = styled.div`
  background: ${props => props.theme.body};
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const Grid = styled.div`
  border: 2px solid ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  background: ${props => props.theme.body};
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
    color: ${props => props.theme.body};
    background: ${props => props.theme.text};
  }
`
const TitleContent = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Grid}: hover &{
    &>*{
      fill: ${props => props.theme.body};
    }
  }

  &>*:first-child{
    margin-right: 1rem;
  }
`
const DescContent = styled.div`
  color: ${props => props.theme.text};
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
    color: ${props => props.theme.body};
  }
`



const SkillsPage = () => {
  return (
    <ThemeProvider theme={LightMode}>
      <BrandNameComponent theme='light'/>
      <SocialMedIcons theme='light'/>
      <HomeButton /> 
      <ParticleComponent theme='light' />

      <Container>
        <Grid>
          <TitleContent>
            <DevelopeLogo width={36} height={36} /> Programmer
          </TitleContent>
          
          <DescContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </DescContent>

          <DescContent>
            <strong> I like programming </strong>
            <ul>
              <li>
                Frontend
              </li>
              <li>
                Backend 
              </li>
            </ul>
          </DescContent>

          <DescContent>
            <strong> Tools </strong>
            <p> Vsc, Sublime, Android Studio, Github</p>
          </DescContent>

        </Grid>
        
        <Grid>
          <TitleContent>
            <DesignLogo width={36} height={36} /> Designer
          </TitleContent>
          
          <DescContent>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </DescContent>
          <DescContent>
            <strong> Skills </strong>
            <p> Html, Js, React, Java, Sass, SQL, Kotlin</p> 
          </DescContent>
          
          <DescContent>
            <strong> Tools </strong>
            <ul>
              <li>
                Frontend
              </li>
              <li>
                Backend 
              </li>
            </ul>
          </DescContent>

        </Grid>

      </Container>
    </ThemeProvider>
  )
}

export default SkillsPage