import React from 'react';
import { ContEnhanced, ContContainer, ContBanner, ContFooter } from './styles';

export function Container({ id, children, ...rest }) {
  return (
    <ContContainer id={id} className={rest.className}>
      {children}
    </ContContainer>
  );
}

export function Banner({ id, bgImage, children }) {
  return (
    <ContBanner id={id} bgImage={bgImage}>
      {children}
    </ContBanner>
  );
}

export function ContainerEnhanced({ id, bgImage, bgColor, children, ...rest }) {
  return (
    <ContEnhanced id={id} bgImage={bgImage} bgColor={bgColor}>
      <ContContainer className={rest.className}>{children}</ContContainer>
    </ContEnhanced>
  );
}

export function FooterContainer({ id, bgImage, bgColor, children, ...rest }) {
  return (
    <ContFooter id={id} bgImage={bgImage} bgColor={bgColor}>
      <ContContainer>{children}</ContContainer>
    </ContFooter>
  );
}
