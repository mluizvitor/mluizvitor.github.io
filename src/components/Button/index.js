import React from 'react';
import { Container, ContIntLink, ContExtLink } from './styles';

export function Button({ type, btnStyle, children, ...rest }) {
  return (
    <Container type={type} btnStyle={btnStyle} {...rest}>
      {children}
    </Container>
  );
}

export function InternalLink({ type, btnStyle, children, ...rest }) {
  return (
    <ContIntLink {...rest}>
      <Container type={type} btnStyle={btnStyle} {...rest}>
        {children}
      </Container>
    </ContIntLink>
  );
}

export function ExternalLink({
  type,
  btnStyle,
  children,
  gridColumn,
  to,
  ...rest
}) {
  return (
    <ContExtLink {...rest} gridColumn={gridColumn} href={to}>
      <Container type={type} btnStyle={btnStyle}>
        {children}
      </Container>
    </ContExtLink>
  );
}
