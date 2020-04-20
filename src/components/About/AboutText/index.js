import React from 'react'

import { FaMapMarkedAlt } from 'react-icons/fa'

import { AboutTitle, AboutDescription, MapLink, MapLinkText } from '../../../styles'

class AboutText extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data: [
                {
                    title: 'SOBRE O HIPERMERCADO'
                },
                {
                    description: 'O hipermercado Bourbon Canoas está localizado no coração da cidade, na Avenida Getúlio Vargas. Com amplo estacionamento, o centro comercial também conta com mix variado de lojas e praça de alimentação. Opções de vestuário, farmácia, ótica, telefonia e artigos para o lar, entre outras, tornam o hipermercado Bourbon Canoas um ponto de encontro que reúne lojas dos mais diversos segmentos.'
                }
            ]
        }
    }

    render() {
        return(
            <section>
                <AboutTitle>
                    {this.state.data.map(title => (
                        title.title
                    ))}
                </AboutTitle>
                <AboutDescription>
                    {this.state.data.map(description => (
                        description.description
                    ))}            
                </AboutDescription>
                
                <MapLink tag="a" href="#map">
                    <FaMapMarkedAlt size={40} color="#cf4676"></FaMapMarkedAlt>
                    <MapLinkText>ver no mapa</MapLinkText>
                </MapLink>
            </section>
        )
    }
}

export default AboutText