import React from 'react';
import { Banner } from '../../components/Container';
import NavBar from '../../components/Navbar';
import Button from '../../components/Button';
import { MdArrowBack } from 'react-icons/md';

import desembarque from '../../assets/portfolio/desembarque.jpg';

import { useHistory } from 'react-router-dom';

function Desembarque() {
  let history = useHistory();
  return (
    <>
      <NavBar position={'flex-start'}>
        <Button onClick={history.goBack}>
          <MdArrowBack size={16} />
          Voltar
        </Button>
      </NavBar>
      <Banner bgImage={desembarque} type={'portfolio'}>
        <h1>Desembarque Digital</h1>
        <p>fdfdfdfd</p>
      </Banner>
    </>
  );
}

export default Desembarque;
