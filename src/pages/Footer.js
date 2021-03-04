import React from 'react';
import { FooterContainer } from '../components/Container';

export default function Footer() {
  return (
    <FooterContainer>
      <a href="mailto:mluizvitor@gmail.com">mluizvitor@gmail.com</a>
      <ul className={'links'}>
        <li>
          <a href="https://t.me/mluizvitor">Telegram</a>
        </li>
        <li>
          <a href="https://twitter.com/mluizvitor">Twitter</a>
        </li>
        <li>
          <a href="https://gitlab.com/mluizvitor">Gitlab</a>
        </li>
        <li>
          <a href="https://github.com/mluizvitor">Github</a>
        </li>
      </ul>
      <hr />
      <p className={'subtitle'} style={{ opacity: 0.7 }}>
        Todos os direitos são reservados a Luiz Vitor Monteiro da Silva Portela
      </p>
    </FooterContainer>
  );
}
