import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";
import HamburgerBest from "./HamburgerBest";

const Container = styled.header`
  background-color: #282828;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
  color: white;
  span {
    vertical-align: middle;
    font-weight: 200;
    margin: 10px;
  }
`;

const Title = styled.h1`
  margin: 20px 0 0 0;
  padding: 0;
  text-align: center;
  font-weight: 400;
  z-index: 30;
`;

const UnderTitle = styled.h2`
  opacity: 0.9;
  font-weight: 500;
  text-align: center;
`;

export default function HomeHeader({ headerImg, underTitle, navBar }) {
  return (
    <Container>
      <Logo headerImg={headerImg} />
      <Link href="/">
        <a>
          <Title>xqc.best</Title>
        </a>
      </Link>
      {underTitle ? (
        <UnderTitle>MasterChef tier list for our reactor</UnderTitle>
      ) : (
        ""
      )}

      {navBar ? <HamburgerBest /> : ""}
    </Container>
  );
}
