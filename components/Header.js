import Image from "next/image";
import Link from "next/link";
import { HeaderStyled } from "./styles/HeaderStyled";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  a {
    font-size: 1.1em;
    margin: 0 10px;
  }
  a:hover {
    border-bottom: 1px solid;
  }

  @media (max-width: 900px) {
    padding: 2px;
    flex-direction: column;
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
          <a>Season 1</a>
        </Link>
        <Link href="/season2">
          <a>Season 2</a>
        </Link>
        <Link href="/season3">
          <a>Season 3</a>
        </Link>
        <Link href="/credits">
          <a>Credits</a>
        </Link>
        <a
          href="https://github.com/adamsokolski/xqc-mastercher-tierlist"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </NavContainer>
    </HeaderStyled>
  );
}
