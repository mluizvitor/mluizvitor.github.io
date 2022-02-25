import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import footertBg from '../assets/backgroundFooter.webp';
import { FooterContainer } from '../components/Container';

export default function Footer({ id }) {
  return (
    <FooterContainer id={id} bgImage={footertBg}>
      <a href="mailto:mluizvitor@gmail.com">mluizvitor@gmail.com</a>
      <ul className={'links'}>
        <li>
          <a
            href="https://t.me/mluizvitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
            <FiExternalLink size={16} style={{ marginLeft: '4px' }} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mluizvitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
            <FiExternalLink size={16} style={{ marginLeft: '4px' }} />
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/mluizvitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gitlab
            <FiExternalLink size={16} style={{ marginLeft: '4px' }} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mluizvitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
            <FiExternalLink size={16} style={{ marginLeft: '4px' }} />
          </a>
        </li>
      </ul>
      <hr />
      <p className={'subtitle'}>
        © Todos os direitos são reservados a Luiz Vitor Monteiro da Silva
        Portela
      </p>
    </FooterContainer>
  );
}
