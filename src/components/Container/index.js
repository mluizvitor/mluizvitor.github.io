import React from 'react';
import { ContEnhanced, ContContainer, ContBanner, ContFooter } from './styles';
import { TypoH2 } from '../Typo';

export function Container({
  id,
  title,
  titleBg,
  gridColumnTemplate,
  children,
  ...rest
}) {
  return (
    <ContContainer
      id={id}
      gridColumnTemplate={gridColumnTemplate}
      className={rest.className}
    >
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
  gridColumnTemplate,
  bgImage,
  bgColor,
  children,
  ...rest
}) {
  return (
    <ContEnhanced id={id} bgImage={bgImage} bgColor={bgColor}>
      <ContContainer
        gridColumnTemplate={gridColumnTemplate}
        className={rest.className}
      >
        {children}
      </ContContainer>
    </ContEnhanced>
  );
}

export function FooterContainer({
  id,
  gridColumnTemplate,
  bgImage,
  bgColor,
  children,
  ...rest
}) {
  return (
    <ContFooter id={id} bgImage={bgImage} bgColor={bgColor}>
      <ContContainer gridColumnTemplate={gridColumnTemplate}>
        {children}
      </ContContainer>
    </ContFooter>
  );
}
