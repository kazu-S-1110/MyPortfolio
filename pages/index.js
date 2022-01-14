import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import { Top } from '../components/Top';
import Prof from '../components/Prof/Prof';
import { fetchEntries, fetchOutputs } from '../lib/contentful';
import { GithubCal } from '../components/GithubCal';
import { Outputs } from '../components/Outputs';
import { Container } from '@chakra-ui/react';
import { Footer } from '../components/Footer';

export default function Home({ skills, outputs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/desktop-computer_1f5a5.png" />
      </Head>
      <Header />
      <Container maxW="container.xl">
        <Top />
        <Prof />
        <Skills skills={skills} />
        <GithubCal />
        <Outputs outputs={outputs} />
        <Footer />
      </Container>
    </div>
  );
}

export const getServerSideProps = async () => {
  const skills = await fetchEntries();
  // console.log(skills);
  const outputs = await fetchOutputs();
  // console.log(outputs);
  return {
    props: {
      skills,
      outputs,
    },
  };
};
