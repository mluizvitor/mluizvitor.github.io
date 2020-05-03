import React from 'react';
import Navbar from './components/Navbar';
import WhoIam from './pages/WhoIam';

function App() {

  const App = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div style={App}>
      <Navbar>
        <button className={"active"} href={'teste'}>Quem é Vitor?</button>
        <button href={'teste'}>Habilidades</button>
        <button href={'teste'}>Portfólio</button>
        <button href={'teste'}>Contato</button>
      </Navbar>
      <WhoIam/>
    </div>
  );
}

export default App;
