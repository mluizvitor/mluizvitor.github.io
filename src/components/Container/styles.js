import styled from 'styled-components';
import { theme } from '../../styles/colors';

export const ContContainer = styled.div`
  max-width: 1220px;
  padding: 32px;
  padding-top: 64px;
  padding-bottom: 64px;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  gap: 32px;
  grid-template-columns: ${(props) =>
    props.gridColumnTemplate
      ? 'repeat(' + props.gridColumnTemplate + ', 1fr)'
      : 'repeat( 6, 1fr)'};

  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  animation: grayscaleAnim 1000ms;

  @media (max-width: 850px) {
    background-position: 25% bottom;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: flex-start;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContBanner = styled.div`
  width: 100vw;
  max-width: 100%;
  height: ${(props) => (props.type === 'error' ? '100vh' : '80vh')};
  min-height: 600px;
  padding: ${(props) =>
    props.type === 'error' || props.type === 'portfolio' ? '32px 30%' : '32px'};
  padding-top: 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 1;

  background-image: ${(props) => `url(` + props.bgImage + `)` || ''};
  background-position: ${(props) =>
    props.type === 'portfolio' ? 'center' : 'center bottom'};
  background-size: cover;
  background-repeat: no-repeat;
  animation: grayscaleAnim 1000ms;
  position: relative;

  &::before {
    content: '';
    background-color: ${(props) =>
      props.type === 'error'
        ? theme.t001.f
        : props.type === 'portfolio'
        ? theme.t001.f
        : ''};

    opacity: ${(props) =>
      props.type === 'error' ? 0.5 : props.type === 'portfolio' ? 0.8 : 0};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -999;
  }

  @media (max-width: 850px) {
    background-position: ${(props) =>
      props.type === 'portfolio' ? 'center' : '82.5% bottom'};
    background-size: cover;
    background-repeat: no-repeat;
    ${(props) => (props.type === 'error' ? 'justify-content: center' : '')};
    padding: 32px;
  }
`;

export const ContEnhanced = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: ${(props) => 'url(' + props.bgImage + ')' || ''};
  background-color: ${(props) => props.bgColor || 'inherit'};
  background-size: auto;
  background-position: center;
  background-repeat: repeat;
  position: relative;

  @media (max-width: 650px) {
    background-position: 0%;
  }
`;

export const ContFooter = styled.footer`
  min-height: calc(160px + 200px);
  height: 100vh;
  background-color: #171717;
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  padding: calc(144px - 64px) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => 'url(' + props.bgImage + ')' || ''};
  background-color: ${(props) => props.bgColor || 'inherit'};

  & div {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
