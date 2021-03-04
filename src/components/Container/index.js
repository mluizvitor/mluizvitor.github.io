import React from 'react';
import { ContEnhanced, ContContainer, ContBanner, ContFooter } from './styles';

export function Container({ id, children, ...rest }) {
  return (
    <ContContainer id={id} className={rest.className}>
      {children}
    </ContContainer>
  );
}

export function Banner({ id, backgroundImage, children }) {
  return (
    <ContBanner id={id} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </ContBanner>
  );
}

export function ContainerEnhanced({ id, bgImage, bgColor, children, ...rest }) {
  return (
    <ContEnhanced
      id={id}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : '',
        backgroundColor: bgColor ? bgColor : '',
      }}
    >
      <ContContainer className={rest.className}>{children}</ContContainer>
    </ContEnhanced>
  );
}

export function FooterContainer({ id, children }) {
  return (
    <ContFooter id={id}>
      <ContContainer>{children}</ContContainer>
    </ContFooter>
  );
}
