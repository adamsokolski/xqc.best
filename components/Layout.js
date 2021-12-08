import { Body } from "./styles/Body.styled";
import Header from "./Header";
import Footer from "./Footer";
import Application from "./Application";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const GlobalStyle = createGlobalStyle`
  body {

  }
`;

const theme = {
  main1: "#f06836",
  main2: "#fff",
  main3: "#333",
};

export default function Layout({ children }) {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    if (router.pathname == "/") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [router.pathname]);
  console.log(router.pathname);
  return (
    <>
      <Body>
        <ThemeProvider theme={theme}>
          <Application />
          <GlobalStyle />
          {isHome && <Header />}

          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </Body>
    </>
  );
}
