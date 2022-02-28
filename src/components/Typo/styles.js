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
  }
`;

export const CTypoH2 = styled.h2`
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'span 4')};
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  font-size: calc(16px * 2 + 0.1vw);
  letter-spacing: calc((16px * 2 + 0.1vw) * -0.02);
  line-height: 100%;
  font-weight: 600;
  margin-top: 32px;

  @media (max-width: 850px) {
    font-size: calc(14px * 2 + 0.1vw);
    letter-spacing: calc((14px * 2 + 0.1vw) * -0.02);
  }
`;

export const CTypoH3 = styled.h3`
  grid-column: ${(props) => (props.gridColumn ? props.gridColumn : 'span 4')};
  font-size: calc(16px + 0.1vw);
  letter-spacing: calc((16px + 0.1vw) * 0.15);
  line-height: 115%;
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 16px;

  @media (max-width: 850px) {
    font-size: calc(14px + 0.1vw);
    letter-spacing: calc((14px + 0.1vw) * 0.15);
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
  }
`;

export const CTypoP = styled.p`
  grid-column: span 4;
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  margin: 0;

  & + p {
    margin-top: 32px;
  }
`;
