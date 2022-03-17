import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../components/Container';
import { Gallery, GalleryItem } from '../components/Gallery';
import { Header } from '../components/Header';

export default function Home() {
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
    </>
  );
}
