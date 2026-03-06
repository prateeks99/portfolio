import styles from '../styles/Home.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.navInner}>
      <a href="/portfolio" className={styles.logo}>PS</a>
      <div className={styles.navLinks}>
        <a href="/portfolio/about">About</a>
        <a href="/portfolio/experience">Experience</a>
        <a href="/portfolio/projects">Projects</a>
        <a href="/portfolio/skills">Skills</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
