import Head from "next/head";
import styles from "./MainLayout.module.css";
import { Navbar } from "../Navbar";
import { FC } from "react"

type Props = {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home site</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
