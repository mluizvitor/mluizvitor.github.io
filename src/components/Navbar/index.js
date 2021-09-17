import React from 'react';
import { Container } from './styles';

export default function Navbar({ children, position }) {
  return <Container position={position}>{children}</Container>;
}
