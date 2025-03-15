import { Montserrat } from "next/font/google";
import Header from "../component/header";
import Footer from "../component/footer";
import "../styles/globals.css"; // Import global CSS

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </main>
  );
}
