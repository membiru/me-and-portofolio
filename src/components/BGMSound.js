import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    left: 8rem;
    top: 3rem;
    
    position: fixed;
    z-index:10;
`

const BGMSound = () => {
    // const ref = React.useRef(null)
    // const [start, setStart] = React.useState(false)

    // const handleClick = () => {
    //     setStart(!start)
    //     !start ? ref.current.play() : ref.current.pause()
    // }
    
    return (
        <Container >
            Sound
        </Container>
    )
}

export default BGMSound