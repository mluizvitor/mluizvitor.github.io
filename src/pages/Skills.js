import React from 'react';
import { ContainerEnhanced } from '../components/Container';
import { Gallery, GalleryItem } from '../components/Gallery';
import { TypoH2 } from '../components/Typo';

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
    <ContainerEnhanced id={id} type={'container'}>
      <TypoH2 titleBg={theme.t002.f} gridColumn={'span 2'}>
        Habilidades
      </TypoH2>
      <Gallery title={'Design'} gridColumnMobile={2} gridColumnTablet={4}>
        <GalleryItem title={'Figma'} imgSource={imgFigma} />
        <GalleryItem title={'UXPin'} imgSource={imgUxpin} />
        <GalleryItem title={'Material Design'} imgSource={imgMaterial} />
        <GalleryItem title={'Inkscape'} imgSource={imgInkscape} />
      </Gallery>

      <Gallery
        title={'Desenvolvimento'}
        gridColumnMobile={2}
        gridColumnTablet={4}
      >
        <GalleryItem title={'HTML5'} imgSource={imgHtml} />
        <GalleryItem title={'CSS3'} imgSource={imgCss} />
        <GalleryItem title={'Javascript'} imgSource={imgJs} />
        <GalleryItem title={'NodeJS'} imgSource={imgNode} />
        <GalleryItem title={'ReactJS e React Native'} imgSource={imgReact} />
        <GalleryItem title={'Git'} imgSource={imgGit} />
      </Gallery>
    </ContainerEnhanced>
  );
}
