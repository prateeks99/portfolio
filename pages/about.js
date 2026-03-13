import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import SocialIcons from '../components/SocialIcons'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.page}>
        <Head>
          <title>About - Prateek Saxena</title>
          <link rel="icon" href="/icon.ico" />
        </Head>

        <h1 className={styles.sectionTitle}>About</h1>

        <div className={styles.aboutSection}>
          <p className={styles.aboutText}>
            Software engineer at Oracle, working on Select AI — integrating LLMs, vector search, and RAG
            pipelines into Oracle's Autonomous Database. Previously at Citrix, building cloud automation
            tools for NetScaler that reduced customer issues by 50%.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.aboutText}>
            Currently pursuing an MS in Computer Science, with interests in ML, NLP, and distributed systems.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.aboutLabel}>Details</p>
          <div className={styles.detailGrid}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Location</span>
              <span className={styles.detailValue}>Bangalore, India</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Company</span>
              <span className={styles.detailValue}>Oracle</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Education</span>
              <span className={styles.detailValue}>B.Tech ECE, NIT Warangal (2018-2022)</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Email</span>
              <span className={styles.detailValue}>prateeksaxena1999@gmail.com</span>
            </div>
          </div>
        </div>

        <SocialIcons links={[
          { icon: 'github', url: 'https://github.com/prateeks99' },
          { icon: 'linkedin', url: 'https://www.linkedin.com/in/prateeks99/' },
          { icon: 'email', url: 'mailto:prateeksaxena1999@gmail.com' },
        ]} />

        <div className={styles.footer}>
          <p className={styles.footerText}>Prateek Saxena</p>
        </div>
      </div>
    </div>
  )
}
