import Head from 'next/head'
import { ExperienceBar, BotaoLevel } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import { CompletedChallange } from '../components/CompletedChallange';
import { Countdown } from '../components/Countdown';
import { Challengebox } from '../components/Challengebox';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallange />
          <Countdown />
        </div>
        <div>
          <Challengebox />
        </div>
      </section>
    </div>
  )
}
