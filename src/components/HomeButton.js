import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeLogo } from './Svgs'


const HomeButtonContainer = styled.div`
  top: 2.3rem;
  left: 50%;
  position: fixed;
  transform: translate(-50%, 0);
  padding: 0.5rem 0.3rem 0.3rem 0.3rem;
  display: flex;
  justify-content: center;

  background-color: ${props => props.theme.secondary};
  border-radius: 50%;
  border: 3px solid ${props => props.theme.secondary};
  width: 2rem;
  height: 2rem;
  
  cursor: pointer;
  z-index: 3;
  align-items: center;

  &>*{
    fill: ${props => props.theme.primary};
  }
  &:hover {
    &>*{
      fill: ${props => props.theme.secondary};
    }
    background-color: ${props => props.theme.primary};

  }

  &>*:first-child {
    color: inherit;
    text-decoration: none;
  }
  
`
const HomeButton = () => {
  return (
    <HomeButtonContainer>
      <NavLink to="/">
        <HomeLogo width={32} height={32} />
      </NavLink>
    </HomeButtonContainer>
  )
}

export default HomeButton