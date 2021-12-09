import Image from "next/image";
import Link from "next/link";
import { HeaderStyled } from "./styles/HeaderStyled";
import styled from "styled-components";
import { FancyLinkStyled } from "./styles/FancyLinkStyled";

const NavContainer = styled.nav`
  right: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 900px) {
    margin: 10px 0;
    right: 0;
    position: relative;
    width: 100%;
    padding: 2px;
    flex-direction: row;
  }
  a {
    font-size: 1.1em;
    margin: 0 10px;
  }
`;

export default function Header({ headerImg }) {
  return (
    <HeaderStyled>
      <div>
        <Link href="/">
          <a>
            <Image
              src={headerImg}
              width="128px"
              height="128px"
              alt="logo with xqc"
            />
            <span>x</span>
            <Image
              src="/images/masterchef-logo.svg"
              width="128px"
              height="128px"
              alt="masterchef logo"
            />
          </a>
        </Link>
      </div>
      <NavContainer>
        <Link href="/season1">
          <FancyLinkStyled>s1</FancyLinkStyled>
        </Link>
        <Link href="/season2">
          <FancyLinkStyled>s2</FancyLinkStyled>
        </Link>
        <Link href="/season3">
          <FancyLinkStyled>s3</FancyLinkStyled>
        </Link>
        <Link href="/season4">
          <FancyLinkStyled>s4</FancyLinkStyled>
        </Link>
        <Link href="/credits">
          <FancyLinkStyled>credits</FancyLinkStyled>
        </Link>
        <FancyLinkStyled
          href="https://github.com/adamsokolski/xqc-mastercher-tierlist"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FancyLinkStyled>
      </NavContainer>
    </HeaderStyled>
  );
}
