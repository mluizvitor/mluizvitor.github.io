import styled from 'styled-components';
import { theme } from '../../styles/colors';

export const Container = styled.div`
  margin-top: 32px;
  grid-column: span 6;

  @media (max-width: 850px) {
    grid-column: span 2;
  }
  @media (max-width: 450px) {
    grid-column: span 1;
  }
`;

export const Grid = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 32px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media (max-width: 450px) {
    grid-template-columns: ${(props) =>
      props.gridColumnMobile
        ? 'repeat(' + props.gridColumnMobile + ' , 1fr)'
        : '1fr'};
    column-gap: 16px;
    row-gap: 24px;
  }
`;

export const Figure = styled.figure`
  ${(props) => (props.gridColumn ? 'grid-column:' + props.gridColumn : '')};
  width: 100%;
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

  @media (max-width: 850px) {
    grid-column: span 1;
  }
`;

export const Video = styled.div`
  ${(props) => (props.gridColumn ? 'grid-column:' + props.gridColumn : '')};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: span 2;

  & video {
    /* width: 100%; */
    /* object-fit: contain; */
    border-radius: 4px;
    /* margin: 0 auto; */
    background-color: ${theme.t001.f};
  }

  & caption {
    font-size: calc(12px + 0.15vw);
    line-height: 145%;
    letter-spacing: calc((12px + 0.1vw) * 0.015);
    text-align: center;
    margin-top: 8px;
  }
`;
