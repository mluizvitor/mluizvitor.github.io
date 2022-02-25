import { shade } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/colors';

export const ContIntLink = styled(Link)`
  text-decoration: none;
`;

export const ContExtLink = styled.a`
  text-decoration: none;

  &.on-grid {
    grid-column: ${(props) => props.gridColumn && props.gridColumn};
    justify-self: center;

    @media (max-width: 850px) {
      grid-column: ${(props) =>
        props.gridColumnTablet && props.gridColumnTablet};
    }
    @media (max-width: 450px) {
      grid-column: ${(props) =>
        props.gridColumnMobile && props.gridColumnMobile};
    }
  }
`;

export const Container = styled.button.attrs((props) => ({
  btnStyle: props.btnStyle || 'transparent',
}))`
  font-family: 'Inter', sans-serif;
  font-size: calc(16px + 0.1vw);
  font-weight: 800;
  line-height: 24px;
  letter-spacing: calc((14px + 0.1vw) * 0.02);
  text-transform: uppercase;

  color: ${theme.t006};
  background: ${(props) =>
    props.btnStyle === 'color' ? theme.t003 : 'transparent'};

  height: 48px;
  padding: 0 16px;
  border: 0;
  border-radius: 4px;

  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;

  white-space: nowrap;
  transition: 1s;
  cursor: pointer;

  & svg + span,
  & img + span {
    margin-left: 8px;
  }

  &:hover {
    background-color: ${(props) =>
      props.btnStyle === 'color' ? shade(0.25, theme.t004) : theme.t002.f};
  }

  @media (max-width: 850px) {
    height: 40px;
  }
`;
