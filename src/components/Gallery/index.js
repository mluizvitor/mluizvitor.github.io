import React from 'react';
import { Container, Figure, Grid } from './styles';

export function Gallery({ title, children }) {
  return (
    <Container>
      <h3 className={'section'}>{title}</h3>
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
