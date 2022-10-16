import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "../styles/Content.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Costs</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main_container}>{children}</main>
      <Footer />
    </>
  );
}
