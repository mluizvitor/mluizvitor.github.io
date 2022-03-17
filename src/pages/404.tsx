import Head from 'next/head';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { FiArrowLeft } from 'react-icons/fi';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Container bgImage="/assets/backgroundHeader.webp" type="error">
        <h1>Erro 404</h1>
        <p>
          O universo é muito vasto onde existem infinitas possibilidades,
          <br />
          mas o que você está procurando não existe por aqui.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <Button onClick={() => history.back()}>
            <FiArrowLeft size={24} aria-hidden />
            <span>Voltar</span>
          </Button>
          <Button>
            <img src="/assets/favicon.svg" height={24} width={24} aria-hidden />
            <span>Ir para o Início</span>
          </Button>
        </div>
      </Container>
    </>
  );
}
