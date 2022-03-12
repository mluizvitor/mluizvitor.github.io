import React from 'react';
import { FiArrowRight, FiTool, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  CardImg,
  CardContainer,
  CardTitle,
  CardBody,
  SeeMore,
  PseudoCardBody,
  CardDescription,
} from './styles';

export function Card({
  imageSrc,
  title,
  description,
  order,
  wip,
  externalLink,
  externalTo,
  internalTo,
  gridColumns,
  gridColumnsTablet,
  gridColumnsMobile,
  children,
  ...rest
}) {
  return (
    <CardContainer
      wip={wip}
      order={order}
      gridColumns={gridColumns}
      gridColumnsTablet={gridColumnsTablet}
      gridColumnsMobile={gridColumnsMobile}
      {...rest}
    >
      {imageSrc && <CardImg src={imageSrc} title={title} />}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardBody>
      <SeeMore>
        {children}
        {wip ? (
          <>
            <span>em construção</span>
            <FiTool size={16} />
          </>
        ) : externalLink ? (
          <>
            <span>ver repo</span>
            <FiExternalLink size={16} />
          </>
        ) : (
          <>
            <span>ver mais</span>
            <FiArrowRight size={16} />
          </>
        )}
      </SeeMore>
      {externalTo && (
        <a
          href={externalTo}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {''}
        </a>
      )}
      {internalTo && <Link to={internalTo} />}
    </CardContainer>
  );
}

export function PseudoCard({
  imageSrc,
  title,
  description,
  order,
  gridColumn,
  gridColumnTablet,
  gridColumnMobile,
  children,
  ...rest
}) {
  return (
    <PseudoCardBody
      order={order}
      gridColumn={gridColumn}
      gridColumnTablet={gridColumnTablet}
      gridColumnMobile={gridColumnMobile}
      {...rest}
    >
      {children}
    </PseudoCardBody>
  );
}

export function CardBox({
  gridTemplate,
  gridTemplateTablet,
  gridTemplateMobile,
  children,
  ...rest
}) {
  return (
    <Container
      gridTemplate={gridTemplate}
      gridTemplateTablet={gridTemplateTablet}
      gridTemplateMobile={gridTemplateMobile}
      {...rest}
    >
      {children}
    </Container>
  );
}
