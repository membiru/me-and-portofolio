import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HomeButton from '../components/HomeButton'
import LogoComponent from '../components/LogoComponent'
import SocialMedIcons from '../components/SocialMedIcons'
import { PikachuLogo } from '../components/Svgs'

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6{
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`
const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)`
  position: absolute;
  color: ${props => props.theme.text};
  text-decoration: none;

  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1; 
`

const Videos = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  position: absolute;

  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
`

const Experiences = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  position: absolute;

  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
`

const BottomSection = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;

  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
`

const Skills = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`
const About = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const CenterImage = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: none;

  display: flex;
  flex-direction: column;
  cursor: pointer;

  &>:last-child{
    padding-top: 1rem;
  }
`



const Main = () => {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <LogoComponent />
        <SocialMedIcons />
        
        <CenterImage>
          <PikachuLogo width={100} height={100} fill='currentColor'/>
          <span>touch me</span>
        </CenterImage>

        <Contact target="_blank" to={"//mailto:rizkyananda007@gmail.com"}>
          <h2>
            Hello there ...
          </h2>
        </Contact>

        <Videos to={"/videos"}>
          <h2>
            VIDEOS
          </h2>
        </Videos>
        <Experiences to={"/experiences"}>
          <h2>
            EXPERIENCES
          </h2>
        </Experiences>

        <BottomSection>
          <Skills to={"/skills"}>
            <h2>
              Skills.
            </h2>
          </Skills>
          <About to={"/about"}>
            <h2>
              About.
            </h2>
          </About>


        </BottomSection>
      </Container>
    </MainContainer>
  )
}

export default Main
