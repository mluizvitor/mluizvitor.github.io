import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: linear-gradient(
    180deg,
    #212121 0%,
    rgba(33, 33, 33, 0.8) 50%,
    rgba(33, 33, 33, 0) 100%
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
