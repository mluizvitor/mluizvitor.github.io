import React from 'react';
import styled from 'styled-components';

export const Container = styled.button`
  grid-column: 1 / 3;
  background-color: hsl(272, 57%, 61%);
  justify-content: space-between;
  padding: 0 16px;
  color: #fff;
  font-weight: 800;

  &:hover {
    background-color: hsl(272, 57%, 56%);
  }
`;
