import React from 'react';
import { Container, ContLink } from './styles';

export function Button({ type, btnStyle, children, ...rest }) {
  return (
    <Container type={type} btnStyle={btnStyle} {...rest}>
      {children}
    </Container>
  );
}

export function Link({ type, btnStyle, children, ...rest }) {
  return (
    <ContLink {...rest}>
      <Container type={type} btnStyle={btnStyle} {...rest}>
        {children}
      </Container>
    </ContLink>
  );
}
