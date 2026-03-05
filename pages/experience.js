import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Experience() {
  return (
    <div>
      <Navbar />
      <div className={styles.page}>
        <Head>
          <title>Experience - Prateek Saxena</title>
          <link rel="icon" href="/icon.ico" />
        </Head>

        <h1 className={styles.sectionTitle}>Experience</h1>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <p className={styles.timePeriod}>July 2024 — Present</p>
            <h3 className={styles.timelineRole}>Member of Technical Staff</h3>
            <p className={styles.timelineCompany}>Oracle, Bangalore</p>

            <div className={styles.projectBlock}>
              <p className={styles.projectName}>Select AI</p>
              <ul className={styles.bulletList}>
                <li>Designed and shipped an open-source Python SDK for Oracle Select AI enabling RAG, NL2SQL, agentic workflows, and vector search against Autonomous Database.</li>
                <li>Enhanced NL2SQL functionality and ran cross-provider LLM benchmarking and accuracy tests to tune prompts.</li>
                <li>Implemented Vector Search and enabled RAG using offline ONNX embeddings and in-database similarity search.</li>
              </ul>
            </div>

            <div className={styles.projectBlock}>
              <p className={styles.projectName}>DBMS_CLOUD</p>
              <ul className={styles.bulletList}>
                <li>Developed an SQL migration package to transform PostgreSQL, MySQL, and MSSQL into Oracle SQL.</li>
                <li>Integrated cloud function invocation (AWS Lambda, Azure & GCP functions) into Autonomous Database workflows.</li>
              </ul>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <p className={styles.timePeriod}>July 2022 — July 2024</p>
            <h3 className={styles.timelineRole}>Associate Software Engineer</h3>
            <p className={styles.timelineCompany}>Citrix, Bangalore</p>

            <div className={styles.projectBlock}>
              <p className={styles.projectName}>HA Daemon</p>
              <ul className={styles.bulletList}>
                <li>Built a Python-based High Availability Daemon for Netscaler on AWS with seamless failover.</li>
                <li>Replaced legacy ENI transfer with EIP and PIP migration, reducing failover downtime by ~50%.</li>
              </ul>
            </div>

            <div className={styles.projectBlock}>
              <p className={styles.projectName}>Zero Touch Provisioning</p>
              <ul className={styles.bulletList}>
                <li>Created Preboot Userdata feature for NetScaler on Linux, automating license setup, startup scripts, and interface configuration.</li>
                <li>Reduced setup time by ~90% and eliminated operational costs for customers and internal testing.</li>
              </ul>
            </div>

            <div className={styles.projectBlock}>
              <p className={styles.projectName}>Cloud Sanity Checker</p>
              <ul className={styles.bulletList}>
                <li>Independently built a tool to detect and prevent cloud deployment misconfigurations.</li>
                <li>Presented to ~500 stakeholders; adopted as official deployment utility, reducing config errors by ~40%.</li>
              </ul>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <p className={styles.timePeriod}>May 2021 — July 2021</p>
            <h3 className={styles.timelineRole}>Summer Intern</h3>
            <p className={styles.timelineCompany}>Citrix, Bangalore</p>
            <ul className={styles.bulletList}>
              <li>Implemented API endpoint testing in Python and Perl, increasing test coverage for SD-WAN Orchestrator by 25%.</li>
              <li>Designed automation framework using Ansible playbooks.</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <p className={styles.timePeriod}>Dec 2020 — Jan 2021</p>
            <h3 className={styles.timelineRole}>Software Intern</h3>
            <p className={styles.timelineCompany}>Trademanza</p>
            <ul className={styles.bulletList}>
              <li>Built interactive UI with ReactJS and Redux for an undergrad startup at NIT Warangal.</li>
              <li>Implemented mock stock games, news feed integration, learning modules, and quizzes.</li>
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>Prateek Saxena</p>
        </div>
      </div>
    </div>
  )
}
