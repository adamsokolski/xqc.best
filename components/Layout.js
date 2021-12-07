import { Body } from "./styles/Body.styled";
import Header from "./Header";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url("https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,900&family=Zilla+Slab&display=swap");

  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Body>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </Body>
    </>
  );
}
