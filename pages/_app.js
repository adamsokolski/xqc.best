import Layout from "../components/Layout";
import { CookiesProvider } from "react-cookie";
import Head from "next/head";
import { useState, useEffect } from "react";
import { xqcEmotes } from "../data/logoEmotesXqc";
import { init } from "@socialgouv/matomo-next";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  const [headerImg, setHeaderImg] = useState("/images/xqc-logo.webp");

  function shuffle(array) {
    let orginalArr = [...array];
    let randomArr = [];
    let maxIndex = array.length - 1;
    while (maxIndex >= 0) {
      let tempRandom = Math.floor(Math.random() * (orginalArr.length - 1));
      randomArr.push(orginalArr[tempRandom]);
      orginalArr = orginalArr.filter((item) => item !== orginalArr[tempRandom]);
      maxIndex--;
    }
    return randomArr;
  }

  useEffect(() => {
    const numArr = [];
    for (let i = 0; i < xqcEmotes.length; i++) {
      numArr[i] = i;
    }

    const randomArr = shuffle(numArr);
    let index = 0;
    setTimeout(() => {
      setHeaderImg("/images/PepeLaugh.png");

      setInterval(() => {
        setHeaderImg(xqcEmotes[randomArr[index]].img);
        index++;
        if (index >= xqcEmotes.length) {
          index = 0;
        }
      }, 5000);
    }, 2000);
  }, []);
  pageProps = { headerImg, ...pageProps };
  return (
    <Layout headerImg={headerImg}>
      <Head>
        <title>XQC.BEST</title>
        <meta
          name="description"
          content="Best of xQcOW 2021. MasterChef tier list with contestants from seasons 1-6 and challenges. Rate how much content they are xqcL"
        />
        <meta
          property="og:image"
          content="/images/logo-emotes/xqcEat-headchogg.gif"
        />
        <meta property="og:site_name" content="xqc.best" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </Layout>
  );
}

export default MyApp;
