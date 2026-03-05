import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Perl', 'C++', 'SQL', 'Shell', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'GCP', 'Azure', 'OCI', 'Docker', 'Unix', 'Linux Kernel'],
  },
  {
    category: 'Frameworks & Tools',
    items: ['React', 'Next.js', 'Express', 'Flask', 'Spring Boot', 'Tailwind CSS', 'Git', 'Ansible'],
  },
  {
    category: 'Databases & Data',
    items: ['Oracle DB', 'MongoDB', 'Redis', 'Firebase', 'Vector Search', 'ONNX'],
  },
  {
    category: 'Domains',
    items: ['AI/ML', 'RAG', 'NL2SQL', 'Cloud Computing', 'Networking', 'IoT', 'DevOps'],
  },
]

export default function Skills() {
  return (
    <div>
      <Navbar />
      <div className={styles.page}>
        <Head>
          <title>Skills - Prateek Saxena</title>
          <link rel="icon" href="/icon.ico" />
        </Head>

        <h1 className={styles.sectionTitle}>Skills</h1>

        {skills.map((s) => (
          <div key={s.category} className={styles.skillSection}>
            <h3 className={styles.skillCategory}>{s.category}</h3>
            <div className={styles.skillTags}>
              {s.items.map((item) => (
                <span key={item} className={styles.skillTag}>{item}</span>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.footer}>
          <p className={styles.footerText}>Prateek Saxena</p>
        </div>
      </div>
    </div>
  )
}
