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
            I studied Electronics and Communication Engineering at NIT Warangal, where I spent more time
            reading about operating systems and distributed systems than anything on the syllabus. That
            curiosity carried me to Citrix, where I spent two years building the kind of software that
            quietly keeps other software alive — high-availability daemons that cut failover downtime by
            half, a zero-touch provisioning system that collapsed multi-hour setup flows to minutes, and
            a cloud deployment tool that let teams push NetScaler instances without touching a terminal.
            These weren't features on a roadmap; they were infrastructure that real customers depended on
            to stay operational.
          </p>
        </div>

        <div className={styles.aboutSection}>
          <p className={styles.aboutText}>
            At Oracle now, I work on Select AI — an open-source Python SDK that lets developers talk to
            their databases in plain language. It's the first time my code ships to people I've never met,
            and that changes how you think about every decision. There's something satisfying about watching
            a public GitHub issue get filed by someone who built something real with what you built. I'm
            also working toward an MS in Computer Science — not as a pivot, but as a way to go deeper on
            the ML and systems problems I've been bumping into at work. The trajectory from HA infrastructure
            to open-source AI tooling wasn't planned, but it makes sense to me now.
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
