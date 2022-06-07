import React from 'react'
import styled from 'styled-components'
import { myTheme } from '../themes/Theme'
import { FacebookLogo, GithubLogo, TwitterLogo, YouTubeLogo } from './Svgs'

const IconsContainer = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    position: fixed;
    bottom: 0;
    right: 2rem;
    
    z-index: 3;

    &>*:not(:last-child) {
        margin: 0.4rem 0;
    }
`

const LineStrip = styled.span`
    width: 3px;
    height: 8rem;
    background: ${props => props.color};
`

const SocialMedIcons = (props) => {
  return (
    <div>
        <IconsContainer>
            <div>
                <a target="_blank" href="https://www.github.com/rizkyananda" rel="noopener noreferrer">
                    <GithubLogo width={25} height={25} fill={props.theme === 'dark' ? myTheme.secondary: myTheme.primary}/>
                </a>
            </div>
            <div>
                <a target="_blank" href="https://facebook.com/m12ananda" rel="noopener noreferrer">
                    <FacebookLogo width={25} height={25} fill={props.theme === 'dark'? myTheme.secondary: myTheme.primary}/>
                </a>
            </div>
            <div>
                <a target="_blank" href="https://twitter.com/m12ananda" rel="noopener noreferrer">
                    <TwitterLogo width={25} height={25} fill={props.theme === 'dark'? myTheme.secondary: myTheme.primary}/>
                </a>
            </div>
            <div>
                <a target="_blank" href="https://youtube.com/channel/UCkqoJ-s1cL-Clrfn7sYpQeg" rel="noopener noreferrer">
                    <YouTubeLogo width={25} height={25} fill={props.theme === 'dark'? myTheme.secondary: myTheme.primary}/>
                </a>
            </div>
            <LineStrip color={props.theme === 'dark'? myTheme.secondary: myTheme.primary}/>
        </IconsContainer >
    </div>

    
  )
}

export default SocialMedIcons