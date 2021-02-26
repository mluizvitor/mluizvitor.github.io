import styled from 'styled-components';
import {theme} from '../../styles/colors'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: linear-gradient(
    180deg,
    ${theme.t001.f} 0%,
    ${theme.t001.a} 75%
  );
  height: 64px;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;

  & > a > button {
    padding: 0 8px;
  }

  @media (max-width: 650px) {
    justify-content: flex-start;
  }
`;
