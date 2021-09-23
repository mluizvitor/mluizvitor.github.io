import React from 'react';
import { ContainerEnhanced, Banner } from '../components/Container';
import profile from '../assets/profile.webp';
import bgImg from '../assets/backgroundHeader.svg';
import { TypoH1, TypoP } from '../components/Typo';

export default function WhoIam({ id }) {
  return (
    <>
      <Banner bgImage={bgImg}>
        <img className={'profilePhoto'} src={profile} alt="" />
        <TypoP>Prazer, me chamo</TypoP>
        <TypoH1>Vitor Monteiro</TypoH1>
        <TypoP>UI-Designer e Desenvolvedor Front-End</TypoP>
      </Banner>
      <ContainerEnhanced id={id}>
        <TypoP gridColumn={'span 4'}>
          Sou um apaixonado por tecnologia e entusiasta do mundo Linux desde
          meus 12~13 anos, quando ganhei meu primeiro computador. Sempre fui
          muito curioso em relação a tudo que envolvesse interação entre pessoas
          e máquinas e foi durante o curso de Ciência da Computação na
          Universidade Federal do Oeste do Pará que descobri a incrível área de
          Interação Humano-Computador, bastante ligada à Experiência de Usuário.
        </TypoP>

        <TypoP gridColumn={'span 4'}>
          Desde 2019 e tenho estudado UX e UI Design, assim como programação,
          especialmente focado no Front-end e na ferramenta React.
        </TypoP>
        <TypoP gridColumn={'span 4'}>
          Atualmente trabalho na Expertise Training Consulting, mas estou aberto
          a novos projetos.
        </TypoP>
      </ContainerEnhanced>
    </>
  );
}
