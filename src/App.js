import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Navbar from './components/Navbar';
import WhoIam from './pages/WhoIam';
import Skills from './pages/Skills';
import Footer from './pages/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>{/* <Routes/> */}</BrowserRouter>
      <Navbar />
      <WhoIam id="who-i-am" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
