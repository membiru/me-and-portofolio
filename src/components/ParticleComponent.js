import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import styledComponents from 'styled-components'

import presetParticles from "../config/tsparticles-presets/char.json"

const Container = styledComponents.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 1;
`

const ParticleComponent = (props) => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    }

    return (
        <Container>
          <Particles 
          id="tsparticles"   
          init={particlesInit} 
          options={presetParticles} />

        </Container>
    )
}

export default ParticleComponent