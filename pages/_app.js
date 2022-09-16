import "../styles/globals.css";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Header from "../components/Header";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />

      <main className="main">
        <Aside />

        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
