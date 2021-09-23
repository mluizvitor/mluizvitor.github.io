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

export function List({ type, gridColumn, children, ...rest }) {
  return (
    <Container type={type} gridColumn={gridColumn} {...rest}>
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
        <ItemAvatar src={avatarImg ? avatarImg : avatarFallback} alt={''} />
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
  return (
    <li style={{ listStyle: 'none' }}>
      <ListHRTitle>{children}</ListHRTitle>
    </li>
  );
}
