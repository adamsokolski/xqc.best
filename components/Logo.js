import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    font-weight: 100;
    font-size: 60px;
    font-family: "Montserrat", sans-serif;
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
        </a>
      </Link>
    </LogoContainer>
  );
}
