import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import { Skills } from '../components/Skills';
import Top from '../components/Top';
import Prof from '../components/Prof/Prof';
import { ListLink } from '../components/Listlink';
import { fetchEntries } from '../lib/contentful';
import dynamic from 'next/dynamic';

const ReactGitHubCalendar = dynamic(() => import('react-ts-github-calendar'), {
  ssr: false,
});

export default function Home({ skills }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/desktop-computer_1f5a5.png" />
      </Head>

      <Header />
      <Top />
      <Prof />
      <Skills skills={skills} />
      <ListLink />
      <ReactGitHubCalendar userName="kazu-s-1110" responsive />
      <footer className={styles.footer}></footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const skills = await fetchEntries();
  // console.log(skills);

  return {
    props: {
      skills,
    },
  };
};
