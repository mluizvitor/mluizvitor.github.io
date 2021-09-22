import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import NavBar from '../../components/Navbar';
import Footer from '../../pages/Footer';

import Logo from '../../assets/logo.svg';

import { Button, Link } from '../../components/Button';
import { ContainerEnhanced, Banner } from '../../components/Container';
import { Gallery, GalleryItem } from '../../components/Gallery';
import {
  List,
  ItemList,
  ListSeparator,
  ListGroupHeader,
} from '../../components/List';
import { TypoH1, TypoH2, TypoP } from '../../components/Typo';
import { PseudoCard } from '../../components/Card';
import { theme } from '../../styles/colors';

import cover from '../../assets/portfolio/desembarque/cover.webp';
import background from '../../assets/portfolio/desembarque/background.webp';
import dsbVideo from '../../assets/portfolio/desembarque/mobilevid.gif';

import desktop1 from '../../assets/portfolio/desembarque/desktop1.webp';
import desktop2 from '../../assets/portfolio/desembarque/desktop2.webp';
import desktop3 from '../../assets/portfolio/desembarque/desktop3.webp';

import mobile1 from '../../assets/portfolio/desembarque/mobile1.webp';
import mobile2 from '../../assets/portfolio/desembarque/mobile2.webp';
import mobile3 from '../../assets/portfolio/desembarque/mobile3.webp';
import mobile4 from '../../assets/portfolio/desembarque/mobile4.webp';
import mobile5 from '../../assets/portfolio/desembarque/mobile5.webp';

import vitorphoto from '../../assets/profile.jpg';

function Desembarque() {
  let history = useHistory();
  return (
    <>
      <NavBar position={'flex-start'}>
        <Button onClick={history.goBack}>
          <MdArrowBack size={24} />
          Voltar
        </Button>
        <Link to="/">
          <img src={Logo} alt="Vitor's Portfólio" />
          Ir para o Início
        </Link>
      </NavBar>
      <Banner bgImage={cover} type={'portfolio'}>
        <TypoH1 gridColumn={'span 7'}>
          De&shy;sem&shy;bar&shy;que Di&shy;gi&shy;tal
        </TypoH1>
        <TypoP gridColumn={'span 4'}>
          Apelidado somente de Desembarque, esta aplicação surgiu por uma
          demanda do Laboratório LAGES, da Universidade Federal do Oeste do Pará
          - UFOPA e desenvolvida no Lab Mídias.
        </TypoP>
      </Banner>
      <ContainerEnhanced bgImage={background}>
        <PseudoCard gridColumn={'span 3'}>
          <TypoH2>O Caso</TypoH2>
          <TypoP>
            Bolsistas e voluntários no LAGES faziam parte de um projeto de
            levantamento de dados pesqueiros em Santarém e região. Esses dados
            serviam para monitorar e quantificar o índice de pesca de
            determinadas espécies para compor um banco de dados público,
            acessível por qualquer interessado, inclusive o Governo Federal.
          </TypoP>
        </PseudoCard>

        <PseudoCard gridColumn={'span 3'}>
          <TypoH2>O Problema</TypoH2>
          <TypoP>
            Até então esses dados eram coletados em planilhas físicas, impressas
            em papel para serem preenchidas à mão. O resultado disso?
            Inconsistências nos dados, informações importantes não eram
            preenchidas, havia muito trabalho para transcreve-los para uma
            planilha de <i>Excel</i> e gastos com papel.
          </TypoP>
        </PseudoCard>
      </ContainerEnhanced>

      <ContainerEnhanced>
        <TypoH2 gridColumn={'span 7'}>A Solução</TypoH2>
        <PseudoCard gridColumn={'span 4'}>
          <TypoP>
            Nisso, foi proposta a criação de um sistema que pudesse ser
            utilizado pelos bolsistas e voluntários do LAGES para que as
            informações das tabelas pudessem ser melhor organizadas e acessadas,
            evitando utilizar o <i>Excel</i> que até então já estava virando uma
            dor de cabeça com a quantidade imensa de dados para processar.
          </TypoP>

          <TypoP>
            A primeira versão do Desembarque Digital foi concebida no
            laboratório Lab Mídias por volta de 2018 e usado como projeto de TCC
            de seu único desenvolvedor até então, Douglas Laurindo. Em 2019 eu
            entrei como Designer de Interfaces e Programador Front-end junto com
            Alecsander Matos e Wagner Wolf para a segunda versão do projeto, já
            utilizando Laravel para back-end e frontend e Material Design como
            biblioteca de design.
          </TypoP>
          <TypoP>
            Mais tarde, próximo ao fim de 2019, entratam novos integrantes no
            projeto e precisamos rever algumas decisões. Chegamos ao ponto em
            que a forma que havíamos desenvolvido até então para desktop, não
            serviria para levar o projeto para as plataformas móveis.
            Precisávamos refazer o projeto. Com o surgimento da terceira versão,
            eu atuei exclusivamente como Designer de Experiência de Usuário até
            início de 2020.
          </TypoP>
        </PseudoCard>

        <PseudoCard gridColumn={'span 2'}>
          <GalleryItem
            title={'Tela inicial do aplicativo móvel'}
            imgSource={mobile1}
            height={'548px'}
            width={'270px'}
          />
        </PseudoCard>
      </ContainerEnhanced>

      <ContainerEnhanced bgColor={theme.t002.m}>
        <TypoH2 gridColumn={'span 6'}>
          Este é o <strong>Desembarque Digital</strong>
        </TypoH2>
        <Gallery title={'Versão Desktop'}>
          <GalleryItem
            title={'Tela de Login. Painel de Controle para Desktop'}
            imgSource={desktop1}
            gridColumn={'span 3'}
          />
          <GalleryItem
            title={
              'Tela inicial com as principais funções que um Administrador pode realizar'
            }
            imgSource={desktop2}
            gridColumn={'span 3'}
          />
          <GalleryItem
            title={'Tela de gerenciamento de entidades pesqueiras parceiras'}
            imgSource={desktop3}
            gridColumn={'span 3'}
          />
        </Gallery>
        <Gallery title={'Versão Mobile'}>
          <GalleryItem
            title={'Animação da Tela Inicial'}
            imgSource={dsbVideo}
            gridColumn={'span 2'}
          />
          <GalleryItem
            title={'Tela das embarcações do pescador'}
            imgSource={mobile2}
            gridColumn={'span 2'}
          />
          <GalleryItem
            title={'Tela de detalhes da embarcação'}
            imgSource={mobile3}
            gridColumn={'span 2'}
          />
          <GalleryItem
            title={'Tela de edição de embarcação'}
            imgSource={mobile4}
            gridColumn={'span 2'}
          />
          <GalleryItem
            title={'Tela de usuário'}
            imgSource={mobile5}
            gridColumn={'span 2'}
          />
        </Gallery>
      </ContainerEnhanced>

      <ContainerEnhanced bgColor={theme.t002.f}>
        <TypoH2 gridColumn={'span 7'}>Envolvidos no Projeto</TypoH2>
        <PseudoCard gridColumn={'span 3'}>
          <List>
            <ListGroupHeader>Equipe de Design</ListGroupHeader>
            <ItemList
              avatar
              avatarImg={vitorphoto}
              title={'Vitor Monteiro'}
              description={'Designer de Experiência de Usuário'}
            />
            <ItemList
              avatar
              title={'Alexandre Lopes de Sousa'}
              description={'Designer de Interfaces'}
            />
            <ListSeparator />

            <ListGroupHeader>Equipe Back-end</ListGroupHeader>
            <ItemList
              avatar
              title={'Débora Cavalcanti'}
              description={'Programadora Back-end'}
            />
            <ListSeparator />

            <ListGroupHeader>Equipe Front-end</ListGroupHeader>
            <ItemList
              avatar
              title={'Ian Brito'}
              description={'Programador Front-end Mobile'}
            />
            <ItemList
              avatar
              title={'Leonardo Paz Amoedo'}
              description={'Programador Front-end Mobile'}
            />
            <ItemList
              avatar
              title={'Pedro Pimentel'}
              description={'Programador Front-end Web'}
            />
          </List>
        </PseudoCard>
        <PseudoCard gridColumn={'span 3'}>
          <List>
            <ListGroupHeader>Equipe FullStack</ListGroupHeader>
            <ItemList
              avatar
              title={'Alecsander Matos'}
              description={'Programador FullStack'}
            />
            <ItemList
              avatar
              title={'Wagner Wolf'}
              description={'Programador FullStack'}
            />
            <ItemList
              avatar
              title={'Douglas Laurindo'}
              description={'Programador FullStack'}
            />

            <ListSeparator />

            <ListGroupHeader>Gerentes de Projeto</ListGroupHeader>
            <ItemList
              avatar
              title={'Vânia Lourenço'}
              description={'Scrum Master & Orientadora'}
            />
            <ItemList
              avatar
              title={'Enoque Alves'}
              description={'Consultor Técnico & Orientador'}
            />
          </List>
        </PseudoCard>
      </ContainerEnhanced>
      <Footer />
    </>
  );
}

export default Desembarque;
