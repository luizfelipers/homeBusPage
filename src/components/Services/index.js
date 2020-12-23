import React from 'react'
import Icon1 from './svg-1.svg';
import Icon2 from './svg-1.svg';
import Icon3 from './svg-1.svg';


import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
    return (
        
        <ServicesContainer id='servicos'>
            <ServicesH1>Nossos Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Turismo</ServicesH2>
                    <ServicesP>Conforto, Qualidade e Entusiasmo nos levam mais longe!</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Transporte Executivo</ServicesH2>
                    <ServicesP>Garantimos a pontualidade do transporte para diferentes grupos</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Transporte Urbano</ServicesH2>
                    <ServicesP>Nosso serviço de transporte urbano garante a sua mobilidade em todas as cidades participantes</ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>

        </ServicesContainer>
    )
}


export default Services