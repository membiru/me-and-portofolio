import React from 'react'
import styled from 'styled-components'

const NameStyle = styled.h1`
    font-family: 'Arial Black', sans-serif;
    color: ${props => props.color === 'dark' ? props.theme.secondary : props.theme.primary};
    display: inline-block;

    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;
`

const BrandNameComponent = (props) => {
  return (
    <NameStyle color={props.theme}>
        MEM<br/>BIRU
    </NameStyle>
  )
}

export default BrandNameComponent