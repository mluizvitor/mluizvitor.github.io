import styled from 'styled-components';
import { theme } from '../../styles/colors';

export const CTypoH1 = styled.h1`
  ${(props) => (props.gridColumn ? 'grid-column: ' + props.gridColumn : '')};
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  font-size: calc(16px * 3 + 0.1vw);
  line-height: 100%;
  margin: 16px 0;
  letter-spacing: calc((16px * 3 + 0.1vw) * -0.02);
  font-weight: 600;
  position: relative;
  hyphens: manual;

  text-shadow: 0 4px 24px ${theme.t001.a};

  @media (max-width: 850px) {
    font-size: calc(14px * 3 + 0.1vw);
    letter-spacing: calc((14px * 3 + 0.1vw) * -0.02);
    grid-column: span 2;
  }
  @media (max-width: 450px) {
    grid-column: span 1;
  }
`;

export const CTypoH2 = styled.h2`
  ${(props) => (props.gridColumn ? 'grid-column: ' + props.gridColumn : '')};
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  font-size: calc(16px * 2 + 0.1vw);
  letter-spacing: calc((16px * 2 + 0.1vw) * -0.02);
  line-height: 100%;
  font-weight: 600;
  margin: 32px 0 16px 0;

  @media (max-width: 850px) {
    font-size: calc(14px * 2 + 0.1vw);
    letter-spacing: calc((14px * 2 + 0.1vw) * -0.02);
    grid-column: span 2;
  }
  @media (max-width: 450px) {
    grid-column: span 1;
  }
`;

export const CTypoH3 = styled.h3`
  font-size: calc(16px + 0.1vw);
  letter-spacing: calc((16px + 0.1vw) * 0.15);
  line-height: 115%;
  text-transform: uppercase;
  font-weight: 400;

  @media (max-width: 850px) {
    font-size: calc(14px + 0.1vw);
    letter-spacing: calc((14px + 0.1vw) * 0.15);
    grid-column: span 2;
  }
  @media (max-width: 450px) {
    grid-column: span 1;
  }
`;

export const CTypoH4 = styled.h4`
  ${(props) => (props.gridColumn ? 'grid-column: ' + props.gridColumn : '')};
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  font-size: calc(16px * 1.5 + 0.1vw);
  letter-spacing: calc((16px * 1.5 + 0.1vw) * 0.02);
  line-height: 120%;
  font-weight: 800;

  @media (max-width: 850px) {
    font-size: calc(14px * 1.5 + 0.1vw);
    letter-spacing: calc((14px * 1.5 + 0.1vw) * 0.02);
    grid-column: span 2;
  }
  @media (max-width: 450px) {
    grid-column: span 1;
  }
`;

export const CTypoP = styled.p`
  ${(props) =>
    props.gridColumn
      ? 'grid-column: ' + props.gridColumn
      : 'grid-column: span 6'};
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  margin: 0;

  @media (max-width: 850px) {
    grid-column: span 2;
  }
  @media (max-width: 450px) {
    grid-column: span 1;
  }

  & + p {
    margin-top: 32px;
  }
`;
