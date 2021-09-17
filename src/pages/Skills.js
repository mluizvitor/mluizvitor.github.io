import React from 'react';
import { Container } from '../components/Container';
import { Gallery, GalleryItem } from '../components/Gallery';

import imgHtml from '../assets/skills/dev/html5.svg';
import imgCss from '../assets/skills/dev/css3.svg';
import imgJs from '../assets/skills/dev/js.svg';
import imgNode from '../assets/skills/dev/node.svg';
import imgReact from '../assets/skills/dev/react.svg';
import imgGit from '../assets/skills/dev/git.svg';

import imgFigma from '../assets/skills/design/figma.svg';
import imgUxpin from '../assets/skills/design/uxpin.svg';
import imgMaterial from '../assets/skills/design/material.svg';
import imgInkscape from '../assets/skills/design/inkscape.svg';
import { theme } from '../styles/colors';

export default function Skills({ id }) {
  return (
    <Container
      id={id}
      type={'container'}
      title={'Habilidades'}
      titleBg={theme.t002.f}
    >
      <Gallery title={'Desenvolvimento'}>
        <GalleryItem title={'HTML5'} imgSource={imgHtml} />
        <GalleryItem title={'CSS3'} imgSource={imgCss} />
        <GalleryItem title={'Javascript'} imgSource={imgJs} />
        <GalleryItem title={'NodeJS'} imgSource={imgNode} />
        <GalleryItem title={'ReactJS e React Native'} imgSource={imgReact} />
        <GalleryItem title={'Git'} imgSource={imgGit} />
      </Gallery>

      <Gallery title={'Design'}>
        <GalleryItem title={'Figma'} imgSource={imgFigma} />
        <GalleryItem title={'UXPin'} imgSource={imgUxpin} />
        <GalleryItem title={'Material Design'} imgSource={imgMaterial} />
        <GalleryItem title={'Inkscape'} imgSource={imgInkscape} />
      </Gallery>
    </Container>
  );
}
