import React from 'react';
import { ContainerEnhanced } from '../components/Container';

import { theme } from '../styles/colors';
import { MdOpenInNew } from 'react-icons/md';
import construction from '../assets/portfolio/construction.svg'

export default function Portfolio({ id }) {
  return (
    <ContainerEnhanced
      id={id}
      bgColor={theme.t002.f}
      className={"wip"}
    >
      <h2>Portfólio</h2>
      <img src={construction} alt=""/>
      <h2>Ainda estou mudando algumas coisas aqui</h2>
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
    </ContainerEnhanced>
  );
}
