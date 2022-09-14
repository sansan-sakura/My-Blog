import "../styles/globals.css";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
