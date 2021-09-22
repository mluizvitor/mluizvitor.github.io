import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import Button from '../Button';

import Logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Navbar({ children }) {
  return (
    <Container>
      <Link to="" onClick={animateScroll.scrollToTop}>
        <Button title="Ir para o início">
          <img src={Logo} alt="Vitor's Portfólio" />
        </Button>
      </Link>
      <Link
        to="who-i-am"
        activeClass="activeBtn"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        <Button title="Ir para informações de Vitor">Vitor?</Button>
      </Link>
      <Link
        to="skills"
        activeClass="activeBtn"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        <Button title="Ir para Habilidades">Skills</Button>
      </Link>
      <Link
        to="portfolio"
        activeClass="activeBtn"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        <Button title="Ir para Portifílio">Portfólio</Button>
      </Link>
      <Link
        to="contact"
        activeClass="activeBtn"
        spy={true}
        smooth={true}
        duration={500}
      >
        <Button title="Ir para Contatos">Contato</Button>
      </Link>
    </Container>
  );
}
