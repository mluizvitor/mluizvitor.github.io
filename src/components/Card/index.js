import React from 'react';
import { TypoH4 } from '../Typo';

import {
  Container,
  CardImg,
  CardContainer,
  CardBody,
  SeeMore,
  PseudoCardBody,
  CardDescription,
} from './styles';

export function Card({ imageSrc, title, description, order, ...rest }) {
  return (
    <CardContainer order={order} {...rest}>
      <CardImg imageSrc={imageSrc} />
      <CardBody>
        <TypoH4>{title}</TypoH4>
        <CardDescription>{description}</CardDescription>

        <SeeMore>
          <span>ver mais</span>
          <MdArrowForward size={24} />
        </SeeMore>
      </CardBody>
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
