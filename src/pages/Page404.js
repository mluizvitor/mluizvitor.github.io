import React from 'react';
import { Banner } from '../components/Container';
import bgImg from '../assets/backgroundHeader.svg';
import { Button, Link } from '../components/Button';
import Logo from '../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

function Page404() {
  let history = useHistory();
  return (
    <>
      <Banner bgImage={bgImg} type={'error'}>
        <h1>Erro 404</h1>
        <p style={{ textAlign: 'center', paddingBottom: '32px' }}>
          {'O universo é muito vasto onde existem infinitas possibilidades, \n' +
            'mas o que você está procurando não existe por aqui.'}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Button btnStyle="color" onClick={history.goBack}>
            <FiArrowLeft size={24} />
            <span>Voltar</span>
          </Button>
          <Link btnStyle="color" to="/">
            <img src={Logo} alt="Vitor's Portfólio" height={24} width={48} />
            <span>Ir para o Início</span>
          </Link>
        </div>
      </Banner>
    </>
  );
}

export default Page404;
