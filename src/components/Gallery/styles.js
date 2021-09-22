import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  grid-column: 1 / 7;
`;

export const Grid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 32px;

  @media (max-width: 956px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const Figure = styled.figure`
  ${(props) => (props.gridColumn ? 'grid-column:' + props.gridColumn : '')};
  width: 100%;
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 4px;

  & img {
    width: 100%;
    object-fit: contain;
    border-radius: 4px;
    margin: 0 auto;
  }

  & figcaption {
    font-size: calc(12px + 0.15vw);
    line-height: 145%;
    letter-spacing: calc((12px + 0.1vw) * 0.015);
    text-align: center;
    margin-top: 8px;
  }
  @media (max-width: 650px) {
    max-width: 100vw;
  }
`;
