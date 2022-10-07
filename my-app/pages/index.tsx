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
        <header className={styles.header}>Aplicação NextJs</header>
      </div>

      <div>
        <p className={styles.paragraph}>
          Não sei o que colocar de legal nessa pagina
        </p>
        <p className={styles.paragraph}>
          Fiquei testando o colorscheme Dracula:
          <p>
            <a
              className={styles.link}
              href="https://draculatheme.com/"
              target="_blank"
            >
              Link da pagina do Dracula
            </a>
          </p>
        </p>
      </div>

      <div>
        <footer className={styles.footer}>Rodapé</footer>
      </div>
    </main>
  );
};

export default Home;
