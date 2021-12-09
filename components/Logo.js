import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: 100;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    margin: 20px;
  }
`;

export default function Logo({ headerImg }) {
  return (
    <LogoContainer>
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
    </LogoContainer>
  );
}
