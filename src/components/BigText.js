import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    position: fixed;
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};

    font-size: calc(5rem + 5vw);
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.2)`};
    z-index: 0;
`

const BigText = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
        {props.text}
    </Text>
  )
}

export default BigText