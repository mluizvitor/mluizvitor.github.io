import React, { useState, useEffect } from 'react';
import { ContainerEnhanced } from '../components/Container';
import { Card, CardBox } from '../components/Card';
import { TypoH2 } from '../components/Typo';
import { ExternalLink } from '../components/Button';
import { FiExternalLink } from 'react-icons/fi';

import estore from '../assets/portfolio/esquelestore.jpg';
import desembarque from '../assets/portfolio/desembarque/cover.webp';
import elegumes from '../assets/portfolio/elegumes.jpg';
import poraque from '../assets/portfolio/poraque.jpg';

import { theme } from '../styles/colors';

export default function Portfolio({ id }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const reponames = [
      'tasks',
      'dtMoney',
      'es-theme-elementerial',
      'saga-rs-macrorify',
    ];

    fetch('https://api.github.com/users/mluizvitor/repos')
      .then((response) => response.json())
      .then((data) => {
        const repositories = data;
        let filtredRepo = [];

        for (let i = 0; i < reponames.length; i++) {
          filtredRepo.push(repositories.find((r) => r.name === reponames[i]));
        }
        setRepos(filtredRepo);
      });
  }, []);

  return (
    <ContainerEnhanced id={id} type="container" bgColor={theme.t002.f}>
      <TypoH2 titleBg={theme.t001.f}>Portfólio</TypoH2>
      <CardBox className="grid" gridTemplate={2} gridTemplateMobile={1}>
        <Card
          wip
          imageSrc={estore}
          title="EsqueleStore"
          description='"Esqieleto" de um aplicativo para lojas, altamente escalável e personalizável'
          order={2}
        />
        <Card
          internalTo={'/desembarque'}
          imageSrc={desembarque}
          title="Desembarque Digital"
          description="Aplicação desenvolvida para coleta de dados pesqueiros em Santarém e região"
          order={0}
        />
        <Card
          wip
          imageSrc={elegumes}
          title="eLegumes"
          description="Projeto de Marketplace agregadora de frutarias. Deu origem ao EsqueleStore"
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

      <TypoH2>Repositórios</TypoH2>
      <CardBox className="grid" gridTemplate={2} gridTemplateMobile={1}>
        {repos.map((repo) => (
          <Card
            externalLink
            key={repo.id}
            title={repo.name}
            description={repo.description}
            externalTo={repo.html_url}
          ></Card>
        ))}
        <ExternalLink
          className="on-grid"
          type="button"
          btnStyle={'color'}
          to="https://github.com/mluizvitor?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          gridColumn={'span 2'}
          gridColumnMobile={'span 1'}
        >
          Ver mais no Github
          <FiExternalLink size={16} style={{ marginLeft: '16px' }} />
        </ExternalLink>
      </CardBox>
    </ContainerEnhanced>
  );
}
