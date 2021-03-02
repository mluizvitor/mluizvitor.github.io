import React from 'react';
import {MdArrowForward} from 'react-icons/md';

import {Container, CardImg, CardContainer, CardBody, SeeMore} from './styles'

export function Card({imageSrc, title, description}){
  return(
    <CardContainer>
      <CardImg style={{backgroundImage: `url(${imageSrc})`}}/>
      <CardBody>
        <h4>{title}</h4>
        <p className="subtitle">{description}</p>
        <SeeMore>
          <span>ver mais</span>
          <MdArrowForward size={24}/>
        </SeeMore>
      </CardBody>
    </CardContainer>
  )
}

export function CardBox({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}