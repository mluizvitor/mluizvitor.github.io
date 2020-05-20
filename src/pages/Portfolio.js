import React from 'react';
import {Container} from '../components/Container';
import {Card, CardBox} from '../components/Card';
import fbCover from '../assets/portfolio/fbcover.png'

export default function Portfolio({id}){
  return (
    <Container id={id} type="container">
      <h2>Portfólio</h2>
      <CardBox>

        <Card
          imageSrc={fbCover}
          title="Facebook Cover Preview"
          description="Aplicação simples que permite testar posição da capa de Facebook em visualização em desktop e mobile"
          />       
      
      </CardBox>
    </Container>
  )
}