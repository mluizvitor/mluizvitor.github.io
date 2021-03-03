import React from 'react';
import { ContainerEnhanced } from '../components/Container';
import { Card, CardBox } from '../components/Card';
import fbCover from '../assets/portfolio/fbcover.svg';
import estore from '../assets/portfolio/esquelestore.png';

import { theme } from '../styles/colors';
import { MdOpenInNew } from 'react-icons/md';

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
          imageSrc={estore}
          title="EsqueleStore"
          description='"Esqieleto" de um aplicativo para lojas, altamente escalável e personalizável'
        />
      </CardBox>
      <div className={'wip'}>
        <h1>Em construção</h1>
        <p className="section">
          Enquanto isso, você pode ver meus projetos no Gitlab e Github
        </p>

        <div>
          <a
            href={'https://gitlab.com/mluizvitor'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Gitlab <MdOpenInNew size={16} />
          </a>
          <a
            href={'https://github.com/mluizvitor'}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github <MdOpenInNew size={16} />
          </a>
        </div>
      </div>
    </ContainerEnhanced>
  );
}
