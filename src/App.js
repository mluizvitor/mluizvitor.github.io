import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Navbar from './components/Navbar';
import WhoIam from './pages/WhoIam';
import Skills from './pages/Skills';
import Footer from './pages/Footer';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <BrowserRouter>{/* <Routes/> */}</BrowserRouter>
      <Navbar />
      <WhoIam id="who-i-am" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Footer id="contact" />
      <GlobalStyle />
    </>
  );
}

export default App;
