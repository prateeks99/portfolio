import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import {SocialMediaIconsReact} from 'social-media-icons-react';
export default function Home() {
  return (
    <div>
      <Navbar />
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title2}>
    
        <div className={styles.typewriter}><h1>Hey, I'm Prateek Saxena!👋</h1></div>

        <button className={styles.button}><a href="https://drive.google.com/file/d/137UnmyOBw-iMib3hu03a6xkBgF6xWtLS/view?usp=sharing"><h1>VIEW RESUME</h1></a></button>
        
        </div>
      </main>

      <footer className={styles.footer}>
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://twitter.com/prateeks99" size="70" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://www.linkedin.com/in/prateeks99/" size="70" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://github.com/prateeks99" size="70" />
      </footer>
    </div>
    </div>
  )
}
