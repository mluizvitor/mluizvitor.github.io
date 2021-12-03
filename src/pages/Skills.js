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

import imgFigma from '../assets/skills/design/figma.webp';
import imgUxpin from '../assets/skills/design/uxpin.webp';
import imgMaterial from '../assets/skills/design/material.webp';
import imgInkscape from '../assets/skills/design/inkscape.webp';
import { theme } from '../styles/colors';

export default function Skills({ id }) {
  return (
    <ContainerEnhanced id={id} type={'container'}>
      <TypoH2 titleBg={theme.t002.f} gridColumn={'span 2'}>
        Habilidades
      </TypoH2>
      <Gallery title={'Design'} gridColumnMobile={2} gridColumnTablet={4}>
        <GalleryItem noZoom title={'Figma'} imgSource={imgFigma} />
        <GalleryItem noZoom title={'UXPin'} imgSource={imgUxpin} />
        <GalleryItem noZoom title={'Material Design'} imgSource={imgMaterial} />
        <GalleryItem noZoom title={'Inkscape'} imgSource={imgInkscape} />
      </Gallery>

      <Gallery
        title={'Desenvolvimento'}
        gridColumnMobile={2}
        gridColumnTablet={4}
      >
        <GalleryItem noZoom title={'HTML5'} imgSource={imgHtml} />
        <GalleryItem noZoom title={'CSS3'} imgSource={imgCss} />
        <GalleryItem noZoom title={'Javascript'} imgSource={imgJs} />
        <GalleryItem noZoom title={'NodeJS'} imgSource={imgNode} />
        <GalleryItem
          noZoom
          title={'ReactJS e React Native'}
          imgSource={imgReact}
        />
        <GalleryItem noZoom title={'Git'} imgSource={imgGit} />
      </Gallery>
    </ContainerEnhanced>
  );
}
