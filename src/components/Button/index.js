import React from 'react';
import { Container } from './styles';

export default function Button({ type, btnStyle, children, ...rest }) {
  return (
    <Container type={type} btnStyle={btnStyle} {...rest}>
      {children}
    </Container>
  );
}
