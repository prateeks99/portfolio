import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.navInner}>
      <a href="./" className={styles.logo}>prateeks99</a>
      <div className={styles.navLinks}>
        <a href="./about">About</a>
        <a href="./experience">Experience</a>
        <a href="./projects">Projects</a>
        <a href="./skills">Skills</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
