import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import Button from '../Button';

import Logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Navbar({ children }) {
  return (
    <Container>
      <Link to="" onClick={animateScroll.scrollToTop}>
        <Button>
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
        <Button btnStyle="transparent">Vitor?</Button>
      </Link>
      <Link
        to="skills"
        activeClass="activeBtn"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        <Button btnStyle="transparent">Skills</Button>
      </Link>
      <Link
        to="portfolio"
        activeClass="activeBtn"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        <Button btnStyle="transparent">Portfólio</Button>
      </Link>
      <Link
        to="contact"
        activeClass="activeBtn"
        spy={true}
        smooth={true}
        offset={-64}
        duration={500}
      >
        <Button btnStyle="transparent">Contato</Button>
      </Link>
    </Container>
  );
}
