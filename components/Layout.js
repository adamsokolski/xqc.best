import { Body } from './styles/Body.styled'
import Header from './Header'
import Footer from './Footer'
import Application from './Application'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
  main1: '#f06836',
  main2: '#fff',
  main3: '#333',
  main4: '#282828',
  winnerGreen: '#42ff60',
}

export default function Layout({ children, headerImg }) {
  const router = useRouter()
  const [isHome, setIsHome] = useState(false)
  useEffect(() => {
    if (
      router.pathname == '/' ||
      router.pathname == '/masterchef' ||
      router.pathname == '/2021' ||
      router.pathname == '/2022' ||
      router.pathname == '/2020' ||
      router.pathname == '/cookies' ||
      router.pathname == '/credits'
    ) {
      setIsHome(false)
    } else {
      setIsHome(true)
    }
  }, [router.pathname])
  return (
    <>
      <Body>
        <ThemeProvider theme={theme}>
          <Application />
          <GlobalStyle />
          {isHome && <Header headerImg={headerImg} />}

          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </Body>
    </>
  )
}
