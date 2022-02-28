import React from 'react';
import { TypoH3 } from '../Typo';
import { Container, Figure, Grid, Video } from './styles';
import { theme } from '../../styles/colors';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export function Gallery({
  title,
  gridTemplate,
  gridTemplateTablet,
  gridTemplateMobile,
  gridColumn,
  gridColumnMobile,
  gridColumnTablet,
  children,
}) {
  return (
    <Container
      gridColumn={gridColumn}
      gridColumnTablet={gridColumnTablet}
      gridColumnMobile={gridColumnMobile}
    >
      <TypoH3>{title}</TypoH3>
      <Grid
        gridTemplate={gridTemplate}
        gridTemplateTablet={gridTemplateTablet}
        gridTemplateMobile={gridTemplateMobile}
      >
        {children}
      </Grid>
    </Container>
  );
}

export function GalleryItem({
  title,
  noZoom,
  imgSource,
  gridColumn,
  gridColumnTablet,
  gridColumnMobile,
  height,
  ...rest
}) {
  return (
    <Figure
      gridColumn={gridColumn}
      gridColumnTablet={gridColumnTablet}
      gridColumnMobile={gridColumnMobile}
      {...rest}
    >
      {noZoom ? (
        <img
          src={imgSource}
          alt={title}
          height={'100%'}
          width={'100%'}
          loading={'lazy'}
        />
      ) : (
        <Zoom overlayBgColorEnd={theme.t001.a}>
          <img
            src={imgSource}
            alt={title}
            height={'100%'}
            width={'100%'}
            loading={'lazy'}
          />
        </Zoom>
      )}
      <figcaption>{title}</figcaption>
    </Figure>
  );
}

export function GalleryVideo({
  title,
  vidSource,
  gridColumn,
  gridColumnTablet,
  gridColumnMobile,
  height,
  ...rest
}) {
  return (
    <Video
      gridColumn={gridColumn}
      gridColumnTablet={gridColumnTablet}
      gridColumnMobile={gridColumnMobile}
    >
      <video
        height={window.innerHeight * 0.8}
        width={'100%'}
        controls
        {...rest}
      >
        <source src={vidSource}></source>
        Your browser does not support the video tag.
      </video>
      <caption>{title}</caption>
    </Video>
  );
}
