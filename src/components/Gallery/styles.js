import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 64px;
`;

export const Grid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 956px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  & figcaption {
    font-size: calc(12px + 0.15vw);
    line-height: 145%;
    letter-spacing: calc((12px + 0.1vw) * 0.015);
  }
`;
