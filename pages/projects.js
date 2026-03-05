import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const projects = [
  {
    title: 'Select AI Python SDK',
    org: 'Oracle',
    desc: 'Open-source SDK enabling developers to build RAG, NL2SQL, agentic workflows, and vector search applications against Oracle Autonomous Database.',
    tags: ['Python', 'AI/ML', 'RAG', 'NL2SQL', 'Vector Search'],
  },
  {
    title: 'Cloud Sanity Checker',
    org: 'Citrix',
    desc: 'Tool to detect and prevent cloud deployment misconfigurations. Adopted as official deployment utility, reducing customer config errors by ~40%.',
    tags: ['Python', 'AWS', 'Cloud', 'DevOps'],
  },
  {
    title: 'HA Daemon',
    org: 'Citrix',
    desc: 'High Availability Daemon for Netscaler on AWS ensuring redundancy through seamless failover, reducing downtime by ~50%.',
    tags: ['Python', 'AWS', 'Networking', 'HA'],
  },
  {
    title: 'Zero Touch Provisioning',
    org: 'Citrix',
    desc: 'Preboot Userdata feature for NetScaler on Linux automating license setup and interface configuration, reducing setup time by ~90%.',
    tags: ['Python', 'Linux', 'Automation'],
  },
  {
    title: 'Real-time Chat Application',
    org: 'NIT Warangal',
    desc: 'Full-stack chat app using MERN stack, Socket.IO, and Redis. Secure auth with OAuth2, containerized with Docker, deployed on GCP Cloud Run.',
    tags: ['TypeScript', 'Next.js', 'Socket.IO', 'Redis', 'Docker', 'GCP'],
  },
  {
    title: 'LoRa Patient Monitoring System',
    org: 'NIT Warangal',
    desc: 'IoT-based real-time health monitoring using Arduino, NodeMCU, and LoRa modules with a custom Android app and Firebase cloud backend.',
    tags: ['IoT', 'Arduino', 'Python', 'C++', 'Firebase'],
  },
  {
    title: 'Kylo:Run',
    org: 'Personal',
    desc: 'An open-source 2D game built with Unity5 engine.',
    tags: ['Unity', 'C#', 'Game Dev'],
    link: 'https://github.com/prateeks99/GameDev_Project1',
  },
  {
    title: 'Post-it!',
    org: 'Personal',
    desc: 'A community notes app built with MongoDB and Next.js.',
    tags: ['Next.js', 'MongoDB', 'React'],
    link: 'https://github.com/prateeks99/notesapp',
  },
]

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className={styles.page}>
        <Head>
          <title>Projects - Prateek Saxena</title>
          <link rel="icon" href="/icon.ico" />
        </Head>

        <h1 className={styles.sectionTitle}>Projects</h1>

        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <div key={p.title} className={styles.projectCard}>
              <div className={styles.projectCardHeader}>
                <h3 className={styles.projectCardTitle}>
                  {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title} &rarr;</a> : p.title}
                </h3>
                <span className={styles.projectCardOrg}>{p.org}</span>
              </div>
              <p className={styles.projectCardDesc}>{p.desc}</p>
              <div className={styles.projectCardTags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>Prateek Saxena</p>
        </div>
      </div>
    </div>
  )
}
