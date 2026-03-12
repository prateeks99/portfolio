import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import SocialIcons from '../components/SocialIcons'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.page}>
        <Head>
          <title>Prateek Saxena</title>
          <link rel="icon" href="/icon.ico" />
        </Head>

        <div className={styles.hero}>
          <h1 className={styles.name}>Prateek Saxena</h1>
          <p className={styles.bio}>
            Member of Technical Staff at Oracle, where I build AI/ML developer tooling
            and cloud database infrastructure. Previously at Citrix on high-availability
            NetScaler systems.
          </p>

          <a
            href="https://drive.google.com/file/d/137UnmyOBw-iMib3hu03a6xkBgF6xWtLS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeLink}
          >
            resume.pdf &rarr;
          </a>

          <SocialIcons links={[
            { icon: 'github', url: 'https://github.com/prateeks99' },
            { icon: 'linkedin', url: 'https://www.linkedin.com/in/prateeks99/' },
            { icon: 'email', url: 'mailto:prateeksaxena1999@gmail.com' },
          ]} />
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>&copy; 2026</p>
        </div>
      </div>
    </div>
  )
}
