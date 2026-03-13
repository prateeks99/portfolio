import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const projects = [
  {
    title: 'Select AI Python SDK',
    org: 'Oracle',
    desc: 'Production open-source SDK that puts RAG, NL2SQL, agentic workflows, and vector search on Oracle Autonomous Database — shipped publicly, real developer users.',
    tags: ['Python', 'AI/ML', 'RAG', 'NL2SQL', 'Vector Search'],
    link: 'https://github.com/oracle/python-select-ai',
  },
  {
    title: 'HA Daemon',
    org: 'Citrix',
    desc: 'Keeps NetScaler on AWS running when instances fail — seamless failover via EIP/PIP migration, cutting downtime by ~50% over the legacy ENI approach.',
    tags: ['Python', 'AWS', 'Networking', 'HA'],
  },
  {
    title: 'Zero Touch Provisioning',
    org: 'Citrix',
    desc: 'Eliminated manual NetScaler setup entirely — automated license activation, interface config, and startup scripts; ~90% reduction in provisioning time.',
    tags: ['Python', 'Linux', 'Automation'],
  },
  {
    title: 'Cloud Sanity Checker',
    org: 'Citrix',
    desc: 'Catches cloud deployment misconfigurations before they reach production — adopted org-wide by ~500 engineers, reducing config errors by ~40%.',
    tags: ['Python', 'AWS', 'Cloud', 'DevOps'],
  },
  {
    title: 'DunderChat',
    org: 'Personal',
    desc: 'Real-time group chat — instant messaging with multi-user rooms, Socket.IO event streaming, and persistent message history.',
    tags: ['Next.js', 'Express', 'Socket.IO', 'MongoDB'],
    link: 'https://github.com/prateeks99/dunderchat',
  },
  {
    title: 'tasks (TUI)',
    org: 'Personal',
    desc: 'Local to-do CLI built for developers who live in the terminal — keyboard-driven, zero context-switch to a browser.',
    tags: ['Python', 'CLI', 'TUI'],
    link: 'https://github.com/prateeks99/tasks',
  },
  {
    title: 'exptrack',
    org: 'Personal',
    desc: 'Log and categorize personal spending with a full-stack app — React frontend, Spring Boot backend, built to understand where money actually goes.',
    tags: ['React', 'Spring Boot', 'Java', 'Full Stack'],
    link: 'https://github.com/prateeks99/expense_tracker',
  },
]

const olderProjects = [
  {
    title: 'Kylo:Run',
    desc: 'Open-source 2D game.',
    link: 'https://github.com/prateeks99/GameDev_Project1',
  },
  {
    title: 'Post-it!',
    desc: 'Community notes app.',
    link: 'https://github.com/prateeks99/notesapp',
  },
  {
    title: 'Real-time Chat Application',
    desc: 'MERN + Socket.IO chat app with OAuth2, Docker, GCP — NIT Warangal project.',
  },
  {
    title: 'LoRa Patient Monitoring System',
    desc: 'IoT health monitoring with Arduino, LoRa, Firebase — NIT Warangal project.',
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
                  {p.link
                    ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title} &rarr;</a>
                    : p.title}
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

        <div className={styles.olderProjectsSection}>
          <p className={styles.olderProjectsTitle}>Also on GitHub</p>
          {olderProjects.map((p) => (
            <div key={p.title} className={styles.olderProjectLink}>
              {p.link
                ? <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title} &rarr;</a>
                : <span>{p.title}</span>}
              <span>{p.desc}</span>
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
