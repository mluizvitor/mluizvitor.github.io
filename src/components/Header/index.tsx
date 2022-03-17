import Image from 'next/image';
import { Link } from 'react-scroll';
import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <nav className={styles.navContainer}>
          <Link
            to="homeBanner"
            role="button"
            tabIndex={0}
            smooth={true}
            duration={500}
          >
            <div style={{ width: 32, height: 32, position: 'relative' }}>
              <Image
                width={32}
                height={32}
                src="/assets/favicon.svg"
                alt="Logo do Portfólio. Possui um formato circular onde transita do rosa para o roxo escuro. Mostra a silhueta de um planeta com um anel a sua volta."
              />
            </div>
          </Link>

          <Link
            to="whoIsVitor"
            role="button"
            tabIndex={0}
            activeClass={styles.activeButton}
            spy={true}
            smooth={true}
            duration={500}
          >
            Vitor?
          </Link>

          <Link
            to="skills"
            role="button"
            tabIndex={0}
            activeClass={styles.activeButton}
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>

          <Link
            to="portfolio"
            role="button"
            tabIndex={0}
            activeClass={styles.activeButton}
            spy={true}
            smooth={true}
            duration={500}
          >
            Portfólio
          </Link>

          <Link
            to="contacts"
            role="button"
            tabIndex={0}
            activeClass={styles.activeButton}
            spy={true}
            smooth={true}
            duration={500}
          >
            Contato
          </Link>
        </nav>
      </header>
    </>
  );
}
