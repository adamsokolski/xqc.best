import Image from "next/image";
import Link from "next/link";
import { HeaderStyled } from "./styles/HeaderStyled";
import styled from "styled-components";
import Hamburger from "./Hamburger";

const NavContainer = styled.nav`
  right: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 900px) {
    margin: 10px 0;
    justify-content: center;

    position: absolute;
    padding: 2px;
    flex-direction: row;
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
              placeholder="blur"
              blurDataURL="/images/logo-emotes/xqcSCAREDOFGIRLS-fraserlol.webp"
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

      <Hamburger />
    </HeaderStyled>
  );
}
