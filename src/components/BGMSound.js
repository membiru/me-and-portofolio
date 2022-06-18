import React from 'react'
import styled, { keyframes } from 'styled-components'

import audioSrc from "../assets/audio/Talking-To-The-Moon.mp3"

const Container = styled.div`
    display: flex;
    left: 10rem;
    top: 3.4rem;
    cursor: pointer;

    position: fixed;
    z-index:10;

    &>*:nth-child(1) {
        animation-delay: 0.1s;
    }
    &>*:nth-child(2) {
        animation-delay: 0.2s;
    }
    &>*:nth-child(3) {
        animation-delay: 0.3s;
    }
    &>*:nth-child(4) {
        animation-delay: 0.4s;
    }
`

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(1.5);
    }
    100%{
        transform: scaleY(1);
    }
`

const AudioPulseLine = styled.div`
    border: 2px solid ${props => props.color === 'dark' ? props.theme.secondary : props.theme.primary};
    background:  ${props => props.color === 'dark' ? props.theme.primary : props.theme.secondary};
    height: 1.5rem;
    width: 2px;
    margin: 0 0.1rem;

    animation: ${play} 1s ease infinite;
    animation-play-state: ${props => props.isClick ? "playing" : "paused"};
`


const BGMSound = () => {
    const ref = React.useRef(null)
    const [start, setStart] = React.useState(false)

    const handleClick = () => {
        setStart(!start)
        !start ? ref.current.play() : ref.current.pause()
    }
    
    return (
        <Container onClick={handleClick}>
            <AudioPulseLine isClick={start} />
            <AudioPulseLine isClick={start} />
            <AudioPulseLine isClick={start} />
            <AudioPulseLine isClick={start} />

            <audio src={audioSrc} ref={ref} loop />
        </Container>
    )
}

export default BGMSound