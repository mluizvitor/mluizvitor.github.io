import React from 'react';
import { FooterContainer } from '../components/Container';
import contactBg from '../assets/backgroundContacts.svg';

import { MdOpenInNew } from 'react-icons/md';

export default function Footer({ id }) {
  return (
    <FooterContainer id={id} bgImage={contactBg}>
      <a href="mailto:mluizvitor@gmail.com">mluizvitor@gmail.com</a>
      <ul className={'links'}>
        <li>
          <a
            href="https://t.me/mluizvitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
            <MdOpenInNew size={16} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mluizvitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <MdOpenInNew size={16} />
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/mluizvitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gitlab
            <MdOpenInNew size={16} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mluizvitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <MdOpenInNew size={16} />
          </a>
        </li>
      </ul>
      <hr />
      <p className={'subtitle'} style={{ opacity: 0.7 }}>
        © Todos os direitos são reservados a Luiz Vitor Monteiro da Silva
        Portela
      </p>
    </FooterContainer>
  );
}
