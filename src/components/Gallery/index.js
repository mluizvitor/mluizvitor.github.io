import React from 'react';
import { TypoH3 } from '../Typo';
import { Container, Figure, Grid, Video } from './styles';
import { theme } from '../../styles/colors';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export function Gallery({ title, gridColumnMobile, children }) {
  return (
    <Container>
      <TypoH3>{title}</TypoH3>
      <Grid gridColumnMobile={gridColumnMobile}>{children}</Grid>
    </Container>
  );
}

export function GalleryItem({ title, imgSource, gridColumn, height, ...rest }) {
  return (
    <Figure gridColumn={gridColumn} {...rest}>
      <Zoom overlayBgColorEnd={theme.t001.a}>
        <img
          src={imgSource}
          alt={title}
          height={height}
          width={'100%'}
          loading={'lazy'}
        />
      </Zoom>
      <figcaption>{title}</figcaption>
    </Figure>
  );
}

export function GalleryVideo({
  title,
  vidSource,
  gridColumn,
  height,
  ...rest
}) {
  return (
    <Video>
      <video
        height={window.innerHeight * 0.8}
        width={'100%'}
        controls
        gridColumn={gridColumn}
        {...rest}
      >
        <source src={vidSource}></source>
        Your browser does not support the video tag.
      </video>
      <caption>{title}</caption>
    </Video>
  );
}
