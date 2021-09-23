import React from 'react';

import { Link, animateScroll } from 'react-scroll';
import { Button } from '../components/Button';

import Logo from '../assets/logo.svg';

import Navbar from '../components/Navbar';
import WhoIam from './WhoIam';
import Skills from './Skills';
import Footer from './Footer';
import Portfolio from './Portfolio';

function Home() {
  return (
    <>
      <Navbar>
        <Link to="" onClick={animateScroll.scrollToTop}>
          <Button title="Ir para o início">
            <img src={Logo} alt="Vitor's Portfólio" height={24} width={48} />
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
          <Button title="Ir para informações de Vitor">
            <span>Vitor?</span>
          </Button>
        </Link>
        <Link
          to="skills"
          activeClass="activeBtn"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
        >
          <Button title="Ir para Habilidades">
            <span>Skills</span>
          </Button>
        </Link>
        <Link
          to="portfolio"
          activeClass="activeBtn"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
        >
          <Button title="Ir para Portifílio">
            <span>Portfólio</span>
          </Button>
        </Link>
        <Link
          to="contact"
          activeClass="activeBtn"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Button title="Ir para Contatos">
            <span>Contato</span>
          </Button>
        </Link>
      </Navbar>
      <WhoIam id="who-i-am" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Footer id="contact" />
    </>
  );
}

export default Home;
