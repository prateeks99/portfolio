import Head from 'next/head'  
import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {Button} from 'semantic-ui-react'
export default function Home() {
  
  
  return (
    <div>
      <Navbar />
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <h1 className={styles.title}>Projects</h1>
      
      <div className={styles.grid}>
          <a className={styles.card2}>
             <img href="https://www.youtube.com/watch?v=BTXG2pbuT3Q&t=1s" className={styles.imageholder} src="https://i.ibb.co/9WR9GFq/941579f2-8d4e-445f-b058-2e3e5a140656.jpg" width="90%" height="90%" />  
      
            <div><a href="https://www.youtube.com/watch?v=BTXG2pbuT3Q&t=1s"><h3>Kylo:Run</h3></a></div>
            <p>An Open-Source game made using Unity5 2D Engine.</p>
            <button className={styles.button2}><a href="https://github.com/prateeks99/GameDev_Project1" ><h1>View Code</h1></a></button>
          </a>

          <a className={styles.card2}>
            <img href="https://postit-taupe.vercel.app/" className={styles.imageholder} src="https://i.ibb.co/KskJz9p/Screenshot-60.png" width="90%" height="90%" />
          <div class="image">
           
            
          </div>
            <a href="https://postit-taupe.vercel.app/"><h3>Post-it!</h3></a>
            <p>A community Notes App using MongoDB + Next.js.</p>
            <div className={styles.buttonholder}><button className={styles.button2}><a href="https://github.com/prateeks99/notesapp" ><h1>View Code</h1></a></button></div>
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
