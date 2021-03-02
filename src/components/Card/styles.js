import styled from 'styled-components';
import { lighten } from 'polished';
import { theme } from '../../styles/colors';

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${lighten(0.05, theme.t001.f)};
  box-shadow: 0 2px 8px -8px ${theme.t001.f};
  transition: 500ms;
  cursor: pointer;
  z-index: 1;
  
  &:hover {
    box-shadow: 0 16px 48px -16px ${theme.t001.f};
    transform: translateY(-8px);
    z-index: 4;
  }
`;

export const CardImg = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: calc(100% / 1 * 1);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 450px) {
    padding-bottom: calc(100% / 5 * 4);
  }
`;

export const CardBody = styled.div`
  padding: 24px;

  & h4 {
    margin-bottom: 8px;
  }
`;

export const Container = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const SeeMore = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  color: ${theme.t005};
  gap: 16px;
  margin-top: 8px;
  margin-left: auto;
`;