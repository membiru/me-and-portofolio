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

  background-color: #3AAFA9;
  border: 3px solid #2B7A78;
  border-radius: 25%;
  width: 2rem;
  height: 2rem;
  
  cursor: pointer;
  z-index: 3;
  align-items: center;

  &:hover {
    background-color: #2B7A78;
    border: 3px solid #2B7A78;
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
        <HomeLogo width={24} height={28} fill='#17252A'/>
      </NavLink>
    </HomeButtonContainer>
  )
}

export default HomeButton