import React from 'react';
import {
  Container,
  ContItem,
  ItemAvatar,
  ItemTitle,
  ItemDescription,
  ItemBody,
  ListHR,
  ListHRTitle,
} from './styles';
import avatarFallback from '../../assets/avatar.svg';

export function List({ type, children, ...rest }) {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
}

export function ItemList({
  avatar,
  avatarImg,
  children,
  title,
  description,
  ...rest
}) {
  return (
    <ContItem {...rest} avatar={avatar}>
      {avatar === true ? (
        <ItemAvatar src={avatarImg ? avatarImg : avatarFallback} />
      ) : (
        ''
      )}
      <ItemBody>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemBody>
      {children}
    </ContItem>
  );
}

export function ListSeparator() {
  return <ListHR />;
}

export function ListGroupHeader({ children }) {
  return <ListHRTitle>{children}</ListHRTitle>;
}
