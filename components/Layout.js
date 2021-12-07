import { Body } from "./styles/Body.styled";
import Header from "./Header";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {

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
