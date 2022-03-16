import Image from 'next/image';
import { animateScroll, Link } from 'react-scroll';
import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
          <Link to="" onClick={() => animateScroll.animateTopScroll}>
            <div style={{ width: 32, height: 32, position: 'relative' }}>
              <Image
                width={32}
                height={32}
                src="/assets/favicon.svg"
                alt="Logo do Portfólio. Possui um formato circular onde transita do rosa para o roxo escuro. Mostra a silhueta de um planeta com um anel a sua volta."
              />
            </div>
          </Link>

          <Link to="whoIsVitor">Vitor?</Link>

          <Link to="skills">Skills</Link>

          <Link to="portfolio">Portfólio</Link>

          <Link to="contacts">Contato</Link>
        </nav>
      </header>
    </>
  );
}
