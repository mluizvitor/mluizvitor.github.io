import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-column: 1 / 3;
  gap: 16px;

  & input,
  & textarea {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: calc(14px + 0.1vw);
    /* font-weight: 400; */
    letter-spacing: calc((14px + 0.1vw) * -0.04);
    line-height: 125%;
    height: 48px;
    border: 2px solid #fff9;
    border-radius: 0;
    background-color: transparent;
    color: #fff;
    padding: 8px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  & textarea {
    min-height: calc(48px * 3);
    resize: none;
  }

  & input:focus,
  & textarea:focus {
    border-color: #fff;
    background-color: #0003;
  }
`;
