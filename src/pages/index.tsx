import Image from 'next/image';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <Container bgImage="/assets/backgroundHeader.webp" type="banner">
        <Image
          width={192}
          height={192}
          className="profilePhoto"
          src="/assets/profile.webp"
          alt="Foto de Vitor Monteiro"
        />
        <p>Prazer, me chamo</p>
        <h1>Vitor Monteiro</h1>
        <p>UI-Designer e Desenvolvedor Front-End</p>
      </Container>

      <Container id="whoIsVitor">
        <p>
          Sou apaixonado por tecnologia e entusiasta do mundo Linux desde meus
          12~13 anos, quando ganhei meu primeiro computador. Sempre fui muito
          curioso em relação a tudo que envolvesse interação entre pessoas e
          máquinas. Desde 2019 tenho estudado UX e UI Design, assim como
          programação, especialmente focado no Front-end onde quero seguir
          carreira.
        </p>
        <p>
          Atualmente estou estudando ReactJS e aberto à novos projetos e
          desafios.
        </p>
      </Container>
    </>
  );
}
