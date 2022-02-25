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
  ...rest
}) {
  return (
    <CardContainer wip={wip} order={order} {...rest}>
      {imageSrc && <CardImg imageSrc={imageSrc} />}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardBody>
      <SeeMore>
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
      {externalTo && <a href={externalTo} />}
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
  children,
  ...rest
}) {
  return (
    <PseudoCardBody order={order} gridColumn={gridColumn} {...rest}>
      {children}
    </PseudoCardBody>
  );
}

export function CardBox({ children }) {
  return <Container>{children}</Container>;
}
