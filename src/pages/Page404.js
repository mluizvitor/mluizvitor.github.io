import React from 'react';
import { Banner } from '../components/Container';
import bgImg from '../assets/backgroundHeader.svg';
import { Link } from '../components/Button';
import Logo from '../assets/logo.svg';

function Page404() {
  return (
    <>
      <Banner bgImage={bgImg} type={'error'}>
        <h1>Erro 404</h1>
        <p style={{ textAlign: 'center', paddingBottom: '32px' }}>
          {'O universo é muito vasto onde existem infinitas possibilidades, \n' +
            'mas o que você está procurando não existe por aqui.'}
        </p>
        <Link btnStyle="color" to="/">
          <img src={Logo} alt="Vitor's Portfólio" />
          Voltar para o Início
        </Link>
      </Banner>
    </>
  );
}

export default Page404;
