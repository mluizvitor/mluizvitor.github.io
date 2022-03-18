import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Card, CardBox } from '../components/Card';
import { Container } from '../components/Container';
import { Gallery, GalleryItem } from '../components/Gallery';
import { Header } from '../components/Header';

interface RepoProps {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

interface HomeProps {
  repos: RepoProps[];
}

export default function Home({ repos }: HomeProps) {
  return (
    <>
      <Head>
        <title>Vitor's Portfolio</title>
      </Head>

      {/**
       *
       * 👇 Navigation Header
       *
       */}

      <Header />

      {/**
       *
       * 👇 "Home Banner" section
       *
       */}

      <Container
        id="homeBanner"
        bgImage="/assets/backgroundHeader.webp"
        type="banner"
      >
        <Image
          width={192}
          height={192}
          className="profilePhoto"
          src="/assets/profile.webp"
          alt="Foto de Vitor Monteiro"
        />
        <p>Prazer, me chamo</p>
        <h1>Vitor Monteiro</h1>
        <p>UI-Designer e Desenvolvedor Front-End</p>
      </Container>

      {/**
       *
       * 👇 "Who Is Vitor?" section
       *
       */}

      <Container id="whoIsVitor">
        <p>
          Sou apaixonado por tecnologia e entusiasta do mundo Linux desde meus
          12~13 anos, quando ganhei meu primeiro computador. Sempre fui muito
          curioso em relação a tudo que envolvesse interação entre pessoas e
          máquinas. Desde 2019 tenho estudado UX e UI Design, assim como
          programação, especialmente focado no Front-end onde quero seguir
          carreira.
        </p>
        <p>
          Atualmente estou estudando ReactJS e aberto à novos projetos e
          desafios.
        </p>
      </Container>

      {/**
       *
       * 👇 Skills section
       *
       */}

      <Container id="skills">
        <h2>Habilidades</h2>

        <h3>Desenvolvimento</h3>
        <Gallery type="skills">
          <GalleryItem
            noZoom
            title={'HTML5'}
            src="/assets/skills/dev/html5.webp"
          />
          <GalleryItem
            noZoom
            title={'CSS3'}
            src="/assets/skills/dev/css3.webp"
          />
          <GalleryItem
            noZoom
            title={'Javascript'}
            src="/assets/skills/dev/js.webp"
          />
          <GalleryItem
            noZoom
            title={'NodeJS'}
            src="/assets/skills/dev/node.webp"
          />
          <GalleryItem
            noZoom
            title={'ReactJS e React Native'}
            src="/assets/skills/dev/react.webp"
          />
          <GalleryItem noZoom title={'Git'} src="/assets/skills/dev/git.webp" />
        </Gallery>

        <h3>Design</h3>
        <Gallery type="skills">
          <GalleryItem
            noZoom
            title={'Figma'}
            src="/assets/skills/design/figma.webp"
          />
          <GalleryItem
            noZoom
            title={'UXPin'}
            src="/assets/skills/design/uxpin.webp"
          />
          <GalleryItem
            noZoom
            title={'Material Design'}
            src="/assets/skills/design/material.webp"
          />
          <GalleryItem
            noZoom
            title={'Inkscape'}
            src="/assets/skills/design/inkscape.webp"
          />
        </Gallery>
      </Container>

      <Container id="portfolio" bgColor="#5c3472">
        <h2>Portfólio</h2>
        <CardBox>
          <Card
            href="/desembarque"
            wip
            imageSrc="/assets/portfolio/desembarque/cover.webp"
            title="Desembarque Digital"
            description="Aplicação desenvolvida para coleta de dados pesqueiros em Santarém e região"
          />
          <Card
            href=""
            wip
            imageSrc="/assets/portfolio/elegumes.jpg"
            title="eLegumes"
            description="Projeto de Marketplace agregadora de frutarias. Deu origem ao EsqueleStore"
          />
          <Card
            href=""
            wip={true}
            imageSrc="/assets/portfolio/esquelestore.jpg"
            title="EsqueleStore"
            description='"Esqieleto" de um aplicativo para lojas, altamente escalável e personalizável'
          />
          <Card
            wip
            href=""
            imageSrc="/assets/portfolio/poraque.jpg"
            title="Poraqué"
            description="Vencedor do 2º Lugar no I Hackathon Inova Tapajós. O sistema controla, monitora e diagnostica centrais de ar remotamente"
          />
        </CardBox>
        <br />
        <h2>Repositórios</h2>
        <CardBox>
          {repos.length !== 0 &&
            repos.map((repo) => (
              <Card
                key={repo.id}
                href={repo.html_url}
                title={repo.name}
                description={repo.description}
              />
            ))}
        </CardBox>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const reponames = [
    'tasks',
    'dtMoney',
    'es-theme-elementerial',
    'saga-rs-macrorify',
  ];

  const repos = await fetch('https://api.github.com/users/mluizvitor/repos')
    .then((response) => response.json())
    .then((data) => {
      const repositories = data;
      let filtredRepo = [];

      for (let i = 0; i < reponames.length; i++) {
        filtredRepo.push(repositories.find((r) => r.name === reponames[i]));
      }
      return filtredRepo;
    });

  return {
    props: {
      repos,
    },
  };
};
