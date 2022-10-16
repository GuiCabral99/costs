import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Costs</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
