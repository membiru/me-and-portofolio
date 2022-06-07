import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DarkMode } from '../themes/Theme'
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

const SocialMedIcons = (props) => {
  return (
    <div>
        <IconsContainer>
            <div>
                <a target="_blank" href="https://www.github.com/rizkyananda" rel="noopener noreferrer">
                    <GithubLogo width={25} height={25} fill={props.theme === 'dark' ? DarkMode.text: DarkMode.body}/>
                </a>
            </div>
            <div>
                <a target="_blank" href="https://facebook.com/m12ananda" rel="noopener noreferrer">
                    <FacebookLogo width={25} height={25} fill={props.theme === 'dark'? DarkMode.text: DarkMode.body}/>
                </a>
            </div>
            <div>
                <a target="_blank" href="https://twitter.com/m12ananda" rel="noopener noreferrer">
                    <TwitterLogo width={25} height={25} fill={props.theme === 'dark'? DarkMode.text: DarkMode.body}/>
                </a>
            </div>
            <div>
                <a target="_blank" href="https://youtube.com/channel/UCkqoJ-s1cL-Clrfn7sYpQeg" rel="noopener noreferrer">
                    <YouTubeLogo width={25} height={25} fill={props.theme === 'dark'? DarkMode.text: DarkMode.body}/>
                </a>
            </div>
            <LineStrip/>
        </IconsContainer>
    </div>

    
  )
}

export default SocialMedIcons