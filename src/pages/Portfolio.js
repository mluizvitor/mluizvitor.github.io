import React from 'react';
import { ContainerEnhanced } from '../components/Container';
import { Card, CardBox } from '../components/Card';
import fbCover from '../assets/portfolio/fbcover.svg';
import estore from '../assets/portfolio/esquelestore.jpg';
import desembarque from '../assets/portfolio/desembarque.jpg';
import elegumes from '../assets/portfolio/elegumes.jpg';
import poraque from '../assets/portfolio/poraque.jpg';

import { theme } from '../styles/colors';

export default function Portfolio({ id }) {
  return (
    <ContainerEnhanced
      id={id}
      type="container"
      bgColor={theme.t002.f}
      title={'Portfólio'}
      titleBg={theme.t001.a}
    >
      <CardBox>
        <Card
          href="NoFoundPage"
          imageSrc={fbCover}
          title="Facebook Cover Preview"
          description="Aplicação simples que permite testar posição da capa de Facebook em visualização em desktop e mobile"
          order={999}
        />
        <Card
          imageSrc={estore}
          title="EsqueleStore"
          description='"Esqieleto" de um aplicativo para lojas, altamente escalável e personalizável'
          order={2}
        />
        <Card
          href={'/desembarque'}
          imageSrc={desembarque}
          title="Desembarque Digital"
          description="Aplicação desenvolvida para coleta de dados pesqueiros em Santarém e região"
          order={0}
        />
        <Card
          imageSrc={elegumes}
          title="eLegumes"
          description="Projeto de Marketplace agregadora de frutarias. Deu sugimento ao EsqueleStore"
          order={1}
        />
        <Card
          imageSrc={poraque}
          title="Poraqué"
          description="Vencedor do 2º Lugar no I Hackathon Tapajós. O sistema controla, monitora e diagnostica centrais de ar remotamente."
          order={3}
        />
      </CardBox>
    </ContainerEnhanced>
  );
}
