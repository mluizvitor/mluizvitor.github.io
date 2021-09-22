import styled from 'styled-components';
import { theme } from '../../styles/colors';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: linear-gradient(180deg, ${theme.t001.f} 0%, ${theme.t001.a} 75%);
  height: 64px;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position || 'center'};
  grid-gap: 8px;
  padding: 8px;
  z-index: 16;

  @media (max-width: 470px) {
    height: 48px;
  }

  & > a > button,
  & > button {
    font-size: calc(14px + 0.1vw);

    @media (max-width: 470px) {
      height: 32px;
      padding: 0 8px;
    }
  }

  @media (max-width: 650px) {
    justify-content: flex-start;
  }
`;
