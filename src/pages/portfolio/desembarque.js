import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import background from '../../assets/portfolio/desembarque/background.webp';
import cover from '../../assets/portfolio/desembarque/cover.webp';
import desktop1 from '../../assets/portfolio/desembarque/desktop1.webp';
import desktop2 from '../../assets/portfolio/desembarque/desktop2.webp';
import desktop3 from '../../assets/portfolio/desembarque/desktop3.webp';
import docs1 from '../../assets/portfolio/desembarque/docs1.webp';
import docs2 from '../../assets/portfolio/desembarque/docs2.webp';
import docs3 from '../../assets/portfolio/desembarque/docs3.webp';
import mobile0 from '../../assets/portfolio/desembarque/mobile0.webp';
import dsbVideo1 from '../../assets/portfolio/desembarque/mobilevid1.mp4';
import dsbVideo2 from '../../assets/portfolio/desembarque/mobilevid2.mp4';
import dsbVideo3 from '../../assets/portfolio/desembarque/mobilevid3.mp4';
import vitorphoto from '../../assets/profile.webp';
import { Button, Link } from '../../components/Button';
import { PseudoCard } from '../../components/Card';
import { Banner, ContainerEnhanced } from '../../components/Container';
import { Gallery, GalleryItem, GalleryVideo } from '../../components/Gallery';
import { ItemList, List, ListGroupHeader } from '../../components/List';
import NavBar from '../../components/Navbar';
import { TypoH1, TypoH2, TypoP } from '../../components/Typo';
import Footer from '../../pages/Footer';
import ScrollToTop from '../../ScrollToTop';
import { theme } from '../../styles/colors';

function Desembarque() {
  let history = useHistory();
  return (
    <>
      <ScrollToTop />
      <NavBar position={'flex-start'}>
        <Button onClick={history.goBack}>
          <FiArrowLeft size={24} />
          <span>Voltar</span>
        </Button>
        <Link to="/">
          <img src={Logo} alt="Vitor's Portfólio" height={24} width={48} />
          <span>Ir para o Início</span>
        </Link>
      </NavBar>
      <Banner bgImage={cover} type={'portfolio'}>
        <TypoH1 gridColumn={'span 4'}>Desembarque Digital</TypoH1>
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
            planilha de <i>Excel</i> e haviam gastos com papel por causa das
            impressões.
          </TypoP>
        </PseudoCard>
      </ContainerEnhanced>
      <ContainerEnhanced gridColumnTemplate={7}>
        <TypoH2 gridColumn={'span 4'}>A Solução</TypoH2>
        <PseudoCard gridColumn={'span 5'}>
          <TypoP>
            A partir disso, foi proposta a criação de um sistema que pudesse ser
            utilizado pelos bolsistas e voluntários do LAGES para que as
            informações das tabelas pudessem ser melhor organizadas e acessadas,
            evitando utilizar o <i>Excel</i> que até então já estava virando uma
            dor de cabeça com a quantidade imensa de dados para processar.
          </TypoP>

          <TypoP>
            A primeira versão do Desembarque Digital foi concebida no
            laboratório Lab Mídias por volta de 2018 e usado como projeto de TCC
            de seu único desenvolvedor até então, Douglas Laurindo e feito
            puramente em PHP. Em 2019 eu entrei como Designer de Interfaces e
            Programador Front-end junto com Alecsander Matos e Wagner Wolf
            (ambos FullStack com foco no back-end) para a segunda versão do
            projeto, já utilizando Laravel como framework e Material Design como
            biblioteca de design.
          </TypoP>
          <TypoP>
            Mais tarde, próximo ao fim de 2019, entratam novos integrantes no
            projeto e precisamos rever algumas decisões. Chegamos ao ponto em
            que a forma que havíamos desenvolvido até então para web, não
            serviria para levar o projeto para as plataformas móveis.
            Precisávamos refazer o projeto. Com o surgimento da terceira versão,
            eu atuei exclusivamente como Designer de Experiência de Usuário até
            início de 2020.
          </TypoP>
        </PseudoCard>

        <PseudoCard gridColumn={'span 2'}>
          <GalleryItem
            title={
              'Primeira versão da tela inicial do aplicativo móvel. Antes do reboot do projeto.'
            }
            imgSource={mobile0}
          />
        </PseudoCard>
      </ContainerEnhanced>
      <ContainerEnhanced bgColor={theme.t002.m}>
        <TypoH2 gridColumn={'span 4'}>
          Este é o <strong>Desembarque Digital</strong>
        </TypoH2>

        <Gallery title={'Versão Web'}>
          <PseudoCard gridColumn={'span 4'}>
            <TypoP>
              A versão para web foi feita para o gerenciamento do sistema. Nela
              é possível:
            </TypoP>
            <List type={'bullet'}>
              <ItemList>Cadastrar novos desembarques pesqueiros;</ItemList>
              <ItemList>Importar planilhas com dados pré-existentes;</ItemList>
              <ItemList>
                Cadastrar, editar e visualizar usuários, sejam agentes de campo
                ou pescadores;
              </ItemList>
              <ItemList>
                Cadastrar, editar e visualizar embarcações de pescadores;
              </ItemList>
              <ItemList>
                Cadastrar, editar e visualizar entidades pesqueiras;
              </ItemList>
              <ItemList>
                Gerar relatórios de nível regional a nível individual;
              </ItemList>
            </List>
          </PseudoCard>
          <PseudoCard gridColumn={'span 2'}></PseudoCard>

          <GalleryItem
            title={'Tela de Login. Painel de Controle para Web'}
            imgSource={desktop1}
            gridColumn={'span 2'}
          />
          <GalleryItem
            title={
              'Tela inicial com as principais funções que um Administrador pode realizar'
            }
            imgSource={desktop2}
            gridColumn={'span 2'}
          />
          <GalleryItem
            title={'Tela de gerenciamento de entidades pesqueiras parceiras'}
            imgSource={desktop3}
            gridColumn={'span 2'}
          />
        </Gallery>

        <Gallery title={'Versão Mobile'}>
          <PseudoCard gridColumn={'span 4'}>
            <TypoP>
              A versão para móvel foi pensada ser usada em campo, durante a
              coleta de dados. Para isso foram considerados a hora do dia e
              iluminação natural, condição climática recorrente na região,
              tamanho da tela dos dispositivos e situações que possam necessitar
              o uso com apenas uma das mãos. Nela é possível:
            </TypoP>

            <List type={'bullet'}>
              <ListGroupHeader>O pescador pode</ListGroupHeader>
              <ItemList>Adicionar desembarques;</ItemList>
              <ItemList>Cadastrar e editar embarcações;</ItemList>
              <ItemList>Vizualizar sua produção diária e mensal.</ItemList>
            </List>

            <List type={'bullet'}>
              <ListGroupHeader>O Agente de campo pode</ListGroupHeader>
              <ItemList>
                Adicionar desembarques para pescadores já cadastrados;
              </ItemList>
              <ItemList>Cadastrar embarcações para pescadores;</ItemList>
              <ItemList>
                Auxiliar pescadores com dúvidas no uso da aplicação.
              </ItemList>
            </List>
          </PseudoCard>

          <PseudoCard gridColumn={'span 2'} />

          <GalleryVideo
            title={'Animação da Tela Inicial'}
            vidSource={dsbVideo1}
            gridColumn={'span 2'}
          />
          <GalleryVideo
            title={'Tela de detalhes da embarcação'}
            vidSource={dsbVideo2}
            gridColumn={'span 2'}
          />
          <GalleryVideo
            title={'Tela de edição de embarcação'}
            vidSource={dsbVideo3}
            gridColumn={'span 2'}
          />
        </Gallery>

        <Gallery title={'Documentação'}>
          <PseudoCard gridColumn={'span 4'}>
            <TypoP>
              Além da documentação de casos de uso, foi feita também a
              documentação da linguagem visual de toda a aplicação. A linguagem
              de design principal utilizada foi o Material Design do Google, com
              algumas mudanças estilísticas.
            </TypoP>
            <TypoP>
              Foram definidas tipografias, tamanhos, espaçamentos, e todos estes
              foram devidamente especificados como podem ver nas imagens abaixo.
            </TypoP>
          </PseudoCard>

          <PseudoCard gridColumn={'span 2'}></PseudoCard>

          <GalleryItem
            title={'Definição das cores utilizadas no projeto'}
            imgSource={docs1}
            gridColumn={'span 2'}
          />
          <GalleryItem
            title={'Definição de tipografia e tamanhos'}
            imgSource={docs2}
            gridColumn={'span 2'}
          />
          <GalleryItem
            title={'Definição de elementos gráficos. Campo de Texto.'}
            imgSource={docs3}
            gridColumn={'span 2'}
          />
        </Gallery>
      </ContainerEnhanced>
      <ContainerEnhanced bgColor={theme.t002.f}>
        <TypoH2 gridColumn={'span 4'}>Envolvidos no Projeto</TypoH2>
        <List gridColumn={'span 3'}>
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

          <ListGroupHeader>Equipe Back-end</ListGroupHeader>
          <ItemList
            avatar
            title={'Débora Cavalcante'}
            description={'Programadora Back-end'}
          />

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

        <List gridColumn={'span 3'}>
          <ListGroupHeader>Equipe FullStack</ListGroupHeader>
          <ItemList
            avatar
            title={'Douglas Laurindo'}
            description={'Programador FullStack'}
          />
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
      </ContainerEnhanced>
      <Footer />
    </>
  );
}

export default Desembarque;
