import styled from 'styled-components';
import { lighten } from 'polished';
import { theme } from '../../styles/colors';
import { TypoP } from '../Typo';

export const CardContainer = styled.div`
  text-decoration: none;
  width: 100%;
  background-color: ${lighten(0.05, theme.t001.f)};
  border-radius: 4px;
  box-shadow: 0 2px 8px -8px ${theme.t001.f};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  order: ${(props) => props.order || 0};
  z-index: 1;
  cursor: default;

  transition: 500ms;

  grid-column: ${(props) => props.gridColumn && props.gridColumn};

  @media (max-width: 850px) {
    grid-column: ${(props) => props.gridColumnTablet && props.gridColumnTablet};
  }

  @media (max-width: 450px) {
    grid-column: ${(props) => props.gridColumnMobile && props.gridColumnMobile};
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
  }

  &:hover {
    ${(props) =>
      !props.wip &&
      'box-shadow: 0 16px 48px -16px' +
        theme.t001.f +
        ';' +
        'transform: scale(1.05); ' +
        'z-index: 4;' +
        'cursor: pointer;'}
  }

  &::after {
    content: '';
    display: ${(props) => (props.wip ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.t002.f};
    opacity: 0.5;
  }
`;

export const CardImg = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: calc(100% / 3 * 2);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(` + props.imageSrc + `)` || ''};
`;

export const CardBody = styled.div`
  padding: 32px 24px 24px;
  display: flex;
  flex-direction: column;
  height: 100%;

  & h4 {
    margin-bottom: 8px;
    text-align: justify;
    hyphens: manual;
  }
`;

export const CardTitle = styled.strong`
  font-size: calc(14px * 1.5 + 0.1vw);
  letter-spacing: calc((14px * 1.5 + 0.1vw) * 0.02);
  line-height: 120%;

  @media (max-width: 850px) {
    font-size: calc(14px * 1.5 + 0.1vw);
    letter-spacing: calc((14px * 1.5 + 0.1vw) * 0.02);
  }
`;

export const CardDescription = styled(TypoP)`
  font-size: calc(14px + 0.125vw);
  letter-spacing: calc((14px + 0.125vw) * 0.02);
  line-height: 140%;
  margin-top: 16px;
`;

export const PseudoCardBody = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  grid-column: ${(props) => props.gridColumn && props.gridColumn};

  @media (max-width: 850px) {
    grid-column: ${(props) => props.gridColumnTablet && props.gridColumnTablet};
  }
  @media (max-width: 450px) {
    grid-column: ${(props) => props.gridColumnMobile && props.gridColumnMobile};
  }
`;

export const Container = styled.div`
  position: relative;
  grid-column: span 4;

  grid-template-columns: ${(props) =>
    props.gridTemplate
      ? 'repeat(' + props.gridTemplate + ',1fr)'
      : 'repeat(4, 1fr)'};

  @media (max-width: 850px) {
    grid-template-columns: ${(props) =>
      props.gridTemplateTablet &&
      'repeat(' + props.gridTemplateTablet + ',1fr)'};
  }

  @media (max-width: 450px) {
    grid-template-columns: ${(props) =>
      props.gridTemplateMobile &&
      'repeat(' + props.gridTemplateMobile + ',1fr)'};
  }
`;

export const SeeMore = styled.div`
  display: flex;
  width: auto;
  align-items: center;
  justify-content: flex-end;
  color: ${theme.t005};
  gap: 16px;
  padding: 8px 0 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin: auto 24px 0;
`;
