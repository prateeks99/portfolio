import Head from 'next/head'
import Link from 'next/link'
import cards, { Card } from 'semantic-ui-react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import {SocialMediaIconsReact} from 'social-media-icons-react'

export default function Home() {
  return (
    <div>
      <Navbar />
    <div className={styles.container}>
      <Head>
        <title>Skills</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.cards}></div>
      <div className={styles.grid2}>
          <a className={styles.card}>
            <h3>Data Structures &amp; Algorithms</h3>
            <p>I have a good understanding of Data Structures and the design of various Algorithms.</p>
          </a>

          <a className={styles.card}>
            <h3>Game Development</h3>
            <p>I have good knowledge of Unity2D, including experience with scripting (C#), animation and GUI styles.</p>
          </a>

          <a
            className={styles.card}
          >
            <h3>Web Development</h3>
            <p>I have knowledge in different front end and back end Languages, responsive frameworks and databases.</p>
          </a>
          <a
            className={styles.card}
          >
            <h3>Graphic Designing</h3>
            <p>I have some experience in UI/UX Designing and Graphic Designing with Adobe Illustrator and Photoshop.</p>
          </a>

        </div>
      <footer className={styles.footer}>
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://twitter.com/prateeks99" size="70" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://www.linkedin.com/in/prateeks99/" size="70" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://github.com/prateeks99" size="70" />
      </footer>
    </div>
    </div>
  )
}
