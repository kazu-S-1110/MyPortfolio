import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Top from '../components/Top';
import Prof from '../components/Prof/Prof';
import Listlink from '../components/Listlink';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/desktop-computer_1f5a5.png" />
      </Head>

      <Header />
      <Top />
      <Prof />
      <Skills />
      <Listlink />
      <footer className={styles.footer}></footer>
    </div>
  );
}
