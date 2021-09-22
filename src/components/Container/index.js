import React from 'react';
import { TypoH2 } from '../Typo';

export function Container({ id, title, titleBg, children, ...rest }) {
  return (
    <ContContainer id={id} className={rest.className}>
      <TypoH2 titleBg={titleBg}>{title}</TypoH2>
      {children}
    </ContContainer>
  );
}

export function Banner({ id, bgImage, children, type }) {
  return (
    <ContBanner id={id} bgImage={bgImage} type={type}>
      {children}
    </ContBanner>
  );
}

export function ContainerEnhanced({
  id,
  bgImage,
  bgColor,
  children,
  title,
  titleBg,
  ...rest
}) {
  return (
    <ContEnhanced id={id} bgImage={bgImage} bgColor={bgColor}>
      <ContContainer className={rest.className}>
        <ContH2 titleBg={titleBg}>{title}</ContH2>
        {children}
      </ContContainer>
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
