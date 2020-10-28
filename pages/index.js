import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Main from '../components/Main'
import Top from "../components/Top"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/desktop-computer_1f5a5.png" />
      </Head> 
      
      <Header />
      <Top/>
      <Main/>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
