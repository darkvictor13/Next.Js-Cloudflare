import Head from "next/head";
import { NextPage } from "next";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Aplicação NextJs</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div>
        <header className={styles.header}>NextJs Application</header>
      </div>

      <div>
        <iframe
          className={styles.metabase_container}
          src="http://traact-metabase-dashboard.us-west-1.elasticbeanstalk.com/public/question/155e8210-7b55-4694-8f27-47374f30e7e1"
        ></iframe>
      </div>

      <div>
        <footer className={styles.footer}>Footer</footer>
      </div>
    </main>
  );
};

export default Home;
