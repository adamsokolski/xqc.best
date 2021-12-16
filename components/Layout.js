import { Body } from "./styles/Body.styled";
import Header from "./Header";
import Footer from "./Footer";
import Application from "./Application";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { xqcEmotes } from "../data/logoEmotesXqc";

const GlobalStyle = createGlobalStyle`
  body {

  }
`;

const theme = {
  main1: "#f06836",
  main2: "#fff",
  main3: "#333",
  main4: "#282828",
};

export default function Layout({ children, headerImg }) {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    if (router.pathname == "/") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [router.pathname]);
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
  );
}
