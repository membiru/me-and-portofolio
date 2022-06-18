import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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

const LineStrip = styled(motion.span)`
    width: 3px;
    height: 8rem;
    background: ${props => props.color};
`

const SocialMedIcons = (props) => {
  return (
    <IconsContainer>
        <motion.div
            initial= {{ transform:"scale(0)" }}
            animate= {{ scale: [0,1,1.5,1] }}
            transition= {{ type: 'spring', duration:1, delay:1 }}
        >
            <a target="_blank" href="https://www.github.com/rizkyananda" rel="noopener noreferrer">
                <GithubLogo width={25} height={25} fill={props.theme === 'dark' ? myTheme.secondary: myTheme.primary}/>
            </a>
        </motion.div>
        <motion.div
            initial= {{ transform: "scale(0)" }}
            animate= {{ scale: [0,1,1.5,1] }}
            transition= {{ type: 'spring', duration:1, delay:1.2 }}
        >
            <a target="_blank" href="https://facebook.com/m12ananda" rel="noopener noreferrer">
                <FacebookLogo width={25} height={25} fill={props.theme === 'dark'? myTheme.secondary: myTheme.primary}/>
            </a>
        </motion.div>
        <motion.div
            initial= {{ transform: "scale(0)" }}
            animate= {{ scale: [0,1,1.5,1] }}
            transition= {{ type: 'spring', duration: 1, delay:1.4 }}
        >
            <a target="_blank" href="https://twitter.com/m12ananda" rel="noopener noreferrer">
                <TwitterLogo width={25} height={25} fill={props.theme === 'dark'? myTheme.secondary: myTheme.primary}/>
            </a>
        </motion.div>
        <motion.div
            initial= {{ transform: "scale(0)" }}
            animate= {{ scale: [0,1,1.5,1] }}
            transition= {{ type: 'spring', duration:1, delay:1.6 }}
        >
            <a target="_blank" href="https://youtube.com/channel/UCkqoJ-s1cL-Clrfn7sYpQeg" rel="noopener noreferrer">
                <YouTubeLogo width={25} height={25} fill={props.theme === 'dark'? myTheme.secondary: myTheme.primary}/>
            </a>
        </motion.div>
        <LineStrip color={props.theme === 'dark'? myTheme.secondary: myTheme.primary}
            initial= {{ height: 0 }}
            animate= {{ height: '8rem' }}
            transition= {{ type: 'spring', duration: 1, delay: 0.8 }}
        />


    </IconsContainer >
  )
}

export default SocialMedIcons