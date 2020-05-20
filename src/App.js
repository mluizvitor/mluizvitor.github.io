import React from 'react';
import {Link} from 'react-scroll';

import Navbar from './components/Navbar';
import WhoIam from './pages/WhoIam';
import Skills from './pages/Skills';
import Footer from './pages/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {

  const App = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div style={App}>
      <Navbar>
        <Link to="who-i-am" activeClass="active" className="button" spy={true} smooth={true} offset={-64} duration={500}>
          Quem é vitor?
        </Link>
        <Link to="skills" activeClass="active" className="button" spy={true} smooth={true} offset={-64} duration={500}>
          Habilidades
        </Link>
        <Link to="portfolio" activeClass="active" className="button" spy={true} smooth={true} offset={-64} duration={500}>
          Portfólio
        </Link>
        <Link to="contact" activeClass="active" className="button" spy={true} smooth={true} offset={-64} duration={500}>
          Contato
        </Link>
      </Navbar>
      <WhoIam id="who-i-am"/>
      <Skills id="skills"/>
      <Portfolio id="portfolio"/>
      <Contact id="contact"/>
      <Footer/>
    </div>
  );
}

export default App;
