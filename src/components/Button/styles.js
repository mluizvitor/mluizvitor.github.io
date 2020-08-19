import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button.attrs((props) => ({
  btnStyle: props.btnStyle || 'transparent',
}))`
  font-family: 'Work Sans', sans-serif;
  font-size: calc(14px + 0.1vw);
  font-weight: 800;
  line-height: 24px;
  letter-spacing: calc((14px + 0.1vw) * 0.02);
  text-transform: uppercase;

  color: #fff;
  background: ${(props) =>
    props.btnStyle === 'color' ? '#CC3D94' : 'transparent'};

  height: 40px;
  padding: 0 16px;
  border: 0;

  display: flex;
  grid-column: 1 / 3;
  position: relative;

  justify-content: center;
  align-items: center;

  white-space: nowrap;
  transition: 1s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.btnStyle === 'color'
        ? shade(0.2, '#CC3D94')
        : 'rgba(255,255,255,0.1)'};
  }
`;
