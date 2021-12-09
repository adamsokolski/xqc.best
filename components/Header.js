import Image from "next/image";
import Link from "next/link";
import { HeaderStyled } from "./styles/HeaderStyled";

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
      <nav>
        <Link href="/credits">
          <a>credits</a>
        </Link>
      </nav>
    </HeaderStyled>
  );
}
