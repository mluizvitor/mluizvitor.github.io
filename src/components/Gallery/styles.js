import styled from 'styled-components';
import { theme } from '../../styles/colors';

export const Container = styled.div`
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'span 4')};

  @media (max-width: 850px) {
    grid-column: ${(props) => props.gridColumnTablet && props.gridColumnTablet};

    figure:first-of-type:last-of-type {
      grid-column: 2/6;
    }
  }

  @media (max-width: 450px) {
    grid-column: ${(props) => props.gridColumnMobile && props.gridColumnMobile};

    figure:first-of-type:last-of-type {
      grid-column: 1/7;
    }
  }
`;

export const Grid = styled.div`
  margin-top: 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: ${(props) =>
    props.gridTemplate
      ? 'repeat(' + props.gridTemplate + ',1fr)'
      : 'repeat(6, 1fr)'};

  @media (max-width: 850px) {
    grid-template-columns: ${(props) =>
      props.gridTemplateTablet &&
      'repeat(' + props.gridTemplateTablet + ',1fr)'};
    gap: 24px;
  }
  @media (max-width: 450px) {
    grid-template-columns: ${(props) =>
      props.gridTemplateMobile &&
      'repeat(' + props.gridTemplateMobile + ',1fr)'};
    column-gap: 16px;
    row-gap: 24px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'span 1')};

  @media (max-width: 850px) {
    grid-column: ${(props) => props.gridColumnTablet && props.gridColumnTablet};
  }

  @media (max-width: 450px) {
    grid-column: ${(props) => props.gridColumnMobile && props.gridColumnMobile};
  }

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
`;

export const Video = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'span 1')};

  @media (max-width: 850px) {
    grid-column: ${(props) => props.gridColumnTablet && props.gridColumnTablet};
  }

  @media (max-width: 450px) {
    grid-column: ${(props) => props.gridColumnMobile && props.gridColumnMobile};
  }

  & video {
    border-radius: 4px;
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
