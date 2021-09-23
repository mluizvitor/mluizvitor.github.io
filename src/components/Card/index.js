import React from 'react';
import { FiArrowRight, FiTool } from 'react-icons/fi';

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

export function Card({ imageSrc, title, description, order, wip, ...rest }) {
  return (
    <CardContainer wip={wip} order={order} {...rest}>
      <CardImg imageSrc={imageSrc} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

        <SeeMore>
          {wip ? (
            <>
              <span>em construção</span>
              <FiTool size={24} />
            </>
          ) : (
            <>
              <span>ver mais</span>
              <FiArrowRight size={24} />
            </>
          )}
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
