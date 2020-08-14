import React from 'react';
import { Container } from './styles';
import Icon from 'react-icons/md';

export default function Button({ type, children }) {
  return <Container type={type}>{children}</Container>;
}
