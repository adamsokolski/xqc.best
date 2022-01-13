import Layout from '../components/Layout'
import { CookiesProvider } from 'react-cookie'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { xqcEmotes } from '../data/logoEmotesXqc'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  // Google Analytics
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  const [headerImg, setHeaderImg] = useState('/images/xqc-logo.webp')

  function shuffle(array) {
    let orginalArr = [...array]
    let randomArr = []
    let maxIndex = array.length - 1
    while (maxIndex >= 0) {
      let tempRandom = Math.floor(Math.random() * (orginalArr.length - 1))
      randomArr.push(orginalArr[tempRandom])
      orginalArr = orginalArr.filter((item) => item !== orginalArr[tempRandom])
      maxIndex--
    }
    return randomArr
  }

  useEffect(() => {
    const numArr = []
    for (let i = 0; i < xqcEmotes.length; i++) {
      numArr[i] = i
    }

    const randomArr = shuffle(numArr)
    let index = 0
    setTimeout(() => {
      setHeaderImg('/images/PepeLaugh.png')

      setInterval(() => {
        setHeaderImg(xqcEmotes[randomArr[index]].img)
        index++
        if (index >= xqcEmotes.length) {
          index = 0
        }
      }, 5000)
    }, 2000)
  }, [])
  pageProps = { headerImg, ...pageProps }
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Layout headerImg={headerImg}>
        <Head>
          <title>xqc.best</title>
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
    </>
  )
}

export default MyApp
