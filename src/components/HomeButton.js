import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeLogo } from './Svgs'


const HomeButtonContainer = styled.div`
  top: 2.3rem;
  left: 50%;
  position: fixed;
  transform: translate(-50%, 0);
  padding:0.5rem;
  display: flex;
  justify-content: center;

  background-color: #2B7A78;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  
  cursor: pointer;
  z-index: 3;
  align-items: center;

  &:hover {
    background-color: #2B7A78;
    box-shadow: 0 0 0.4rem 0.1rem #17252A;
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
        <HomeLogo width={32} height={32} fill='#17252A'/>
      </NavLink>
    </HomeButtonContainer>
  )
}

export default HomeButton