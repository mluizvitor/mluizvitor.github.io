import styled from 'styled-components';

export const ContContainer = styled.div`
  max-width: 1220px;
  padding: 32px;
  padding-top: 64px;
  padding-bottom: 64px;
  width: 100%;
  box-sizing: border-box;

  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  animation: grayscaleAnim 1000ms;

  @media (max-width: 650px) {
    background-position: 25% bottom;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: flex-start;
  }
`;

export const ContBanner = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 80vh;
  min-height: 600px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  z-index: 1;

  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  animation: grayscaleAnim 1000ms;

  @media (max-width: 650px) {
    background-position: 82.5% bottom;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: flex-start;
  }
`;

export const ContEnhanced = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-size: auto;
  background-position: center;
  background-repeat: repeat;
  position: relative;

  @media (max-width: 650px) {
    background-position: 0%;
  }
`;

export const ContFooter = styled.footer`
  background-color: #171717;
  padding: calc(144px - 64px) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
