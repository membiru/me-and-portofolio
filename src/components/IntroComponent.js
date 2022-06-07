import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import imgProfile from '../assets/images/profile-img-blue.png'


const BorderContainer = styled(motion.div)`
    display: flex;
    position: absolute;
    width: 60vw;
    height: 55vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: linear-gradient(
            to right,
            ${props => props.theme.primary} 50%,
            ${props => props.theme.secondary} 50%
        ) bottom,
        linear-gradient(
            to right,
            ${props => props.theme.primary} 50%,
            ${props => props.theme.secondary} 50%
        ) top;
    border-left: 2px solid ${props => props.theme.primary};
    border-right: 2px solid ${props => props.theme.secondary};
    
    background-repeat: no-repeat;
    background-size: 100% 2px;
    
    z-index: 1;
`

const Container = styled.div`
    display: flex;
    position: relative;
    width: 50%;

    .profile-image {
        position: absolute;
        width: 100%;
        height: auto;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
    }
`

const TextContainer = styled.div`
    font-size: calc(1rem + 1.5vw);
    color: ${props => props.theme.primary};
    padding: 2rem;

    display: flex;  
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child {
        color: ${props => props.theme.primary};
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
    }
`

const IntroComponent = () => {
  return (
    <BorderContainer
        initial={{ height: 0 }} 
        animate={{ height: '45vh' }}
        transition={{ type: 'spring', stiffness:100,  duration: 2, delay:1 }}
    >
        <Container>
            <TextContainer>
                <h1>SUP,</h1>
                <h3>I'm Rizky Ananda.</h3>
                <h6>Like, learn and will always learn programming, design, and also Android.</h6>
            </TextContainer>
        </Container>
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay:2 }}
            >
                <div>
                    <img className='profile-image' src={imgProfile} alt='profile' />
                </div>
            </motion.div>
        </Container>
    </BorderContainer>
  )
}

export default IntroComponent