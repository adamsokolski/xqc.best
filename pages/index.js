import Image from "next/image";
import Good from "../components/Good";
import { ContainerStyled } from "../components/styles/ContainerStyled";
import { ImageContainer } from "../components/styles/ImageContainer";
import { ContestantContainer } from "../components/styles/ContestantContainer";
import Link from "next/link";
import HomeHeader from "../components/HomeHeader";
import styled from "styled-components";

const LinkTitle = styled.h3`
  font-size: 30px;
  &:hover {
    color: ${(props) => props.theme.main1};
  }
`;

export default function Home({ headerImg }) {
  return (
    <div>
      <HomeHeader headerImg={headerImg} />
      <ContainerStyled>
        <LinkTitle>
          <Link href="/season1">
            <a>Season 1</a>
          </Link>
        </LinkTitle>
        <LinkTitle>
          <Link href="/season2">
            <a>Season 2</a>
          </Link>
        </LinkTitle>
        <LinkTitle>
          <Link href="/season3">
            <a>Season 3</a>
          </Link>
        </LinkTitle>
      </ContainerStyled>
    </div>
  );
}
