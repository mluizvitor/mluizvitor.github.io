import React from 'react';
import { TypoH3 } from '../Typo';
import { Container, Figure, Grid } from './styles';

export function Gallery({ title, gridColumnMobile, children }) {
  return (
    <Container>
      <TypoH3>{title}</TypoH3>
      <Grid gridColumnMobile={gridColumnMobile}>{children}</Grid>
    </Container>
  );
}

export function GalleryItem({
  title,
  imgSource,
  gridColumn,
  height,
  width,
  ...rest
}) {
  return (
    <Figure gridColumn={gridColumn} {...rest}>
      <img src={imgSource} alt={title} height={height} width={width} />
      <figcaption>{title}</figcaption>
    </Figure>
  );
}
