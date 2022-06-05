import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.h1`
    font-family: 'Arial Black', sans-serif;
    color: ${props => props.theme.text};
    display: inline-block;

    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;
`

const LogoComponent = () => {
  return (
    <LogoStyle>
        .MEM<br/>BIRU
    </LogoStyle>
  )
}

export default LogoComponent