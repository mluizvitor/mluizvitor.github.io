import React from 'react';
import { Container, Banner } from '../components/Container';
import profile from '../assets/profile.jpg';
import bgImg from '../assets/backgroundHeader.svg';

export default function WhoIam({ id }) {
  return (
    <>
      <Banner backgroundImage={bgImg}>
        <img className={'profilePhoto'} src={profile} alt="" />
        <p>Prazer, me chamo</p>
        <h1>Vitor Monteiro</h1>
        <p>UI-Designer e Desenvolvedor Front-End</p>
      </Banner>
      <Container id={id} type={'text'}>
        <p>
          Sou estudante de Ciência da Computação na Universidade Federal do
          Oeste do Pará e durante o curso descobri a incrível área de Interação
          Humano-Computador, bastante ligada à Experiência de Usuário. Sempre
          fui apaixonado por tecnologia e design, especialmente de interfaces e
          tenho estudado de forma autodidata desde 2019.
        </p>

        <p>
          Sou do Brasil, sou do Norte, de onde tenho orgulho de ter nascido. Nas
          horas vagas gosto muito de jogar RPG eletrônico, ouvir metal
          sinfônico, ver memes e me aprimorar como programador e designer.
        </p>

        <p>
          Participo de alguns projetos na universidade como programador
          front-end e lider de design de interação e pretendo fazer carreira
          nessa área.
        </p>
      </Container>
    </>
  );
}
