import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Button } from 'semantic-ui-react';

const Navbar  = () => (
    <div className={styles.nav2}>
    <div className={styles.navbar}>
        <a href='./' ><h1 className={styles.mainlogo} >&#60;/prateeks99/&#62;</h1></a>
        <ul><li><a href='./about'>About</a></li><li><a href='./projects'>Projects</a></li><li><a href='./skills'>Skills</a></li></ul>
    </div>
    </div>
)

export default Navbar;
