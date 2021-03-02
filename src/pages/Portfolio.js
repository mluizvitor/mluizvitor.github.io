import React from 'react';
import { ContainerEnhanced } from '../components/Container';
import { Card, CardBox } from '../components/Card';
import fbCover from '../assets/portfolio/fbcover.svg';
import { theme } from '../styles/colors';

export default function Portfolio({ id }) {
  return (
    <ContainerEnhanced id={id} type="container" bgColor={theme.t003}>
      <h2>Portfólio</h2>
      <CardBox>
        <Card
          imageSrc={fbCover}
          title="Facebook Cover Preview"
          description="Aplicação simples que permite testar posição da capa de Facebook em visualização em desktop e mobile"
        />
        <Card
          imageSrc={fbCover}
          title="Facebook Cover Preview"
          description="Aplicação simples que permite testar posição da capa de Facebook em visualização em desktop e mobile"
        />
        <Card
          imageSrc={fbCover}
          title="Facebook Cover Preview"
          description="Aplicação simples que permite testar posição da capa de Facebook em visualização em desktop e mobile"
        />
        <Card
          imageSrc={fbCover}
          title="Facebook Cover Preview"
          description="Aplicação simples que permite testar posição da capa de Facebook em visualização em desktop e mobile"
        />
      </CardBox>
    </ContainerEnhanced>
  );
}
