import React from 'react';
import { ContainerEnhanced, Banner } from '../components/Container';
import profile from '../assets/profile.webp';
import bgImg from '../assets/backgroundHeader.webp';
import { TypoH1, TypoP } from '../components/Typo';
import { PseudoCard } from '../components/Card';

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
        <PseudoCard gridColumn={'span 4'}>
          <TypoP>
            Sou apaixonado por tecnologia e entusiasta do mundo Linux desde meus
            12~13 anos, quando ganhei meu primeiro computador. Sempre fui muito
            curioso em relação a tudo que envolvesse interação entre pessoas e
            máquinas. Desde 2019 tenho estudado UX e UI Design, assim como
            programação, especialmente focado no Front-end onde quero seguir
            carreira.
          </TypoP>
          <TypoP>
            Atualmente estou estudando ReactJS e aberto à novos projetos e
            desafios.
          </TypoP>
        </PseudoCard>
      </ContainerEnhanced>
    </>
  );
}
