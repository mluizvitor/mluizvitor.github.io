import React from 'react';
import { TypoH3 } from '../Typo';
import { Container, Figure, Grid } from './styles';

export function Gallery({ title, children }) {
  return (
    <Container>
      <TypoH3>{title}</TypoH3>
      <Grid>{children}</Grid>
    </Container>
  );
}

export function GalleryItem({ title, imgSource, imgSourceHover }) {
  return (
    <Figure>
      <img src={imgSource} alt={title} />
      <figcaption>{title}</figcaption>
    </Figure>
  );
}
