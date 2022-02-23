import React from 'react';
import { ContainerEnhanced } from '../components/Container';
import { Card, CardBox } from '../components/Card';
import { TypoH2 } from '../components/Typo';

import estore from '../assets/portfolio/esquelestore.jpg';
import desembarque from '../assets/portfolio/desembarque/cover.webp';
import elegumes from '../assets/portfolio/elegumes.jpg';
import poraque from '../assets/portfolio/poraque.jpg';

import { theme } from '../styles/colors';

export default function Portfolio({ id }) {
  return (
    <ContainerEnhanced id={id} type="container" bgColor={theme.t002.f}>
      <TypoH2 gridColumn={'span 2'} titleBg={theme.t001.f}>
        Portfólio
      </TypoH2>
      <CardBox>
        <Card
          wip
          imageSrc={estore}
          title="EsqueleStore"
          description='"Esqieleto" de um aplicativo para lojas, altamente escalável e personalizável'
          order={2}
        />
        <Card
          to={'/desembarque'}
          imageSrc={desembarque}
          title="Desembarque Digital"
          description="Aplicação desenvolvida para coleta de dados pesqueiros em Santarém e região"
          order={0}
        />
        <Card
          wip
          imageSrc={elegumes}
          title="eLegumes"
          description="Projeto de Marketplace agregadora de frutarias. Deu sugimento ao EsqueleStore"
          order={1}
        />
        <Card
          wip
          imageSrc={poraque}
          title="Poraqué"
          description="Vencedor do 2º Lugar no I Hackathon Inova Tapajós. O sistema controla, monitora e diagnostica centrais de ar remotamente"
          order={3}
        />
      </CardBox>
    </ContainerEnhanced>
  );
}
