import { useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import styles from "../styles/globals.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  if (loading) {
    return <h1 className={styles.loading}>Loading...</h1>;
  } else {
    return (
      <>
        <Head>
          <meta name="google" content="notranslate" />
          <meta httpEquiv="Content-Language" content="en" />
          <title>My List | Next.js Playground</title>
          <link rel="shortcut icon" href="./favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
