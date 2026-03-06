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
            I'm a software engineer currently working as a Member of Technical Staff at Oracle, Bangalore,
            where I build AI/ML developer tooling and cloud database infrastructure. Before Oracle, I spent
            two years at Citrix building high-availability systems, zero-touch provisioning, and cloud
            deployment tools for NetScaler.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.aboutText}>
            I'm interested in AI, ML, and cloud computing, and I'm looking to advance my expertise
            through an MS in Computer Science with the goal of developing intelligent systems and
            contributing as an ML/Research Engineer.
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

        <div className={styles.aboutSection}>
          <p className={styles.aboutLabel}>Leadership</p>
          <div className={styles.aboutText}>
            <p>Core Member, SpringSpree '22 — Design committee for NIT Warangal's annual cultural fest.</p>
            <br />
            <p>Additional Secretary, Quiz Club — Organised inter-college and intra-college quizzes.</p>
            <br />
            <p>Joint Secretary, ECE Association — Organised hackathons, workshops, and mentored juniors.</p>
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
