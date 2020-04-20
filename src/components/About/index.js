import React from 'react'

import AboutText from './AboutText/index'
import AboutCarousel from './AboutCarousel/index'

import { Container, AboutConteiner } from '../../styles'

class About extends React.Component{
    render() {
        return(
            <Container>     
                <AboutConteiner>
                    <AboutText />
                    <AboutCarousel />
                </AboutConteiner>
            </Container>
        )
    }
}

export default About