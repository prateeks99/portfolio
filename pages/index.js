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
          <p className={styles.greeting}>Hi, I'm</p>
          <h1 className={styles.name}>Prateek Saxena</h1>
          <p className={styles.role}>Member of Technical Staff at Oracle</p>
          <p className={styles.bio}>
            Software engineer with experience in cloud infrastructure, AI/ML tooling, and distributed systems.
            Previously at Citrix. B.Tech in ECE from NIT Warangal.
          </p>

          <div className={styles.actions}>
            <a
              href="https://drive.google.com/file/d/137UnmyOBw-iMib3hu03a6xkBgF6xWtLS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              View Resume
            </a>
            <a href="mailto:prateeksaxena1999@gmail.com" className={styles.btnOutline}>
              Get in Touch
            </a>
          </div>

          <SocialIcons links={[
            { icon: 'github', url: 'https://github.com/prateeks99' },
            { icon: 'linkedin', url: 'https://www.linkedin.com/in/prateeks99/' },
            { icon: 'email', url: 'mailto:prateeksaxena1999@gmail.com' },
          ]} />
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>Prateek Saxena</p>
        </div>
      </div>
    </div>
  )
}
