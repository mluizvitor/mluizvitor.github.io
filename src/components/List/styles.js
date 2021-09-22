import styled from 'styled-components';
import { opacify } from 'polished';

export const Container = styled.ul`
  margin: 16px 0;
`;

export const ContItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 4px;

  min-height: 48px;

  &:hover {
    background-color: ${opacify('0.1', '#ffffff00')};
  }
`;

export const ItemAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ItemTitle = styled.strong`
  display: block;
  line-height: 110%;
`;

export const ItemDescription = styled.span`
  display: block;
  font-size: calc(12px + 0.1vw);
  line-height: 110%;
  opacity: 0.7;
`;

export const ItemBody = styled.div`
  display: block;
`;

export const ListHR = styled.hr`
  margin: 16px 0;
  width: 100%;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ListHRTitle = styled.span`
  font-size: calc(12px + 0.1vw);
  line-height: 120%;
  letter-spacing: calc((12px + 0.1vw) * 0.15);
  text-transform: uppercase;
  font-weight: 400;
  margin-left: 16px;
`;
