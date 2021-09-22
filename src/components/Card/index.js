import React from 'react';
import { TypoH4 } from '../Typo';

  CardDescription,

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

export function CardBox({ children }) {
  return <Container>{children}</Container>;
}
