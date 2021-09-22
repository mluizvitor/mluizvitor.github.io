import styled from 'styled-components';

export const CTypoH1 = styled.h1`
  ${(props) => (props.gridColumn ? 'grid-column: ' + props.gridColumn : '')};
  ${(props) => (props.order ? 'order: ' + props.order : '')};
`;

export const CTypoH2 = styled.h2`
  ${(props) => (props.gridColumn ? 'grid-column: ' + props.gridColumn : '')};
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45%;
    z-index: -1;
    border-radius: 32px;

    transform: translateX(16px);

    background-color: ${(props) => props.titleBg || ''};
  }
`;

export const CTypoH3 = styled.h3`
  font-size: calc(16px + 0.1vw);
  line-height: 115%;
  letter-spacing: calc((16px + 0.1vw) * 0.15);
  text-transform: uppercase;
  font-weight: 400;
`;

export const CTypoH4 = styled.h4`
  ${(props) => (props.gridColumn ? 'grid-column: ' + props.gridColumn : '')};
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  line-height: 120%;
  font-size: calc(16px * 1.5 + 0.1vw);
  letter-spacing: calc((16px * 1.5 + 0.1vw) * 0.02);
  font-weight: 800;
`;

export const CTypoP = styled.p`
  ${(props) =>
    props.gridColumn ? 'grid-column: ' + props.gridColumn : 'span 6'};
  ${(props) => (props.order ? 'order: ' + props.order : '')};

  margin: 0;

  & + p {
    margin-top: 32px;
  }
`;
