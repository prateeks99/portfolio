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
        <title>About</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={styles.main}>
        <img className={styles.profilepic} src="https://i.ibb.co/rcnWh02/64320915-409771006291383-7643192962372861952-o.jpg" />
        <h1 className={styles.title}>About Me</h1>
       
        <p className={styles.description  }>
        I am an undergraduate student at National Institute of Technology Warangal pursuing B.Tech. in Electronics and Communication Engineering. I am interested in exploring new technologies and improving my skills to build applications which solve real-life problems.
        </p>
      </main>

      <footer className={styles.footer}>
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://twitter.com/home" size="70" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://www.linkedin.com/in/prateeks99/" size="70" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="0" roundness="15%" url="https://github.com/prateeks99" size="70" />
      </footer>
    </div>
    </div>
  )
}
