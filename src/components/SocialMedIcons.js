import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FacebookLogo, GithubLogo, TwitterLogo, YouTubeLogo } from './Svgs'

const IconsContainer = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    bottom: 0;
    right: calc(2rem + 2vw);

    color: #17252A;
    
    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.3rem 0;
    }
`

const LineStrip = styled.span`
    width: 3px;
    height: 7rem;
    background: #2B7A78;
`

const SocialMedIcons = () => {
  return (
    <div>
        <IconsContainer>
            <div>
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"//www.github.com/rizkyananda"}}>
                    <GithubLogo width={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"//facebook.com/m12ananda"}}>
                    <FacebookLogo width={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"//twitter.com/m12ananda"}}>
                    <TwitterLogo width={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
            <div>
                <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"//www.youtube.com/channel/UCkqoJ-s1cL-Clrfn7sYpQeg"}}>
                    <YouTubeLogo width={25} height={25} fill='currentColor'/>
                </NavLink>
            </div>
            <LineStrip/>
        </IconsContainer>
    </div>

    
  )
}

export default SocialMedIcons