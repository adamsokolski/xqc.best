import Image from "next/image";
import Good from "../components/Good";
import { ContainerStyled } from "../components/styles/ContainerStyled";
import { ImageContainer } from "../components/styles/ImageContainer";
import { ContestantContainer } from "../components/styles/ContestantContainer";
import Link from "next/link";
import HomeHeader from "../components/HomeHeader";
import styled from "styled-components";
import { FancyLinkStyled } from "../components/styles/FancyLinkStyled";

const LinkTitle = styled.h3`
  font-size: 30px;
`;

export default function Home({ headerImg }) {
  return (
    <div>
      <HomeHeader headerImg={headerImg} />
      <ContainerStyled>
        <LinkTitle>
          <Link href="/season1">
            <FancyLinkStyled>Season 1</FancyLinkStyled>
          </Link>
        </LinkTitle>
        <LinkTitle>
          <Link href="/season2">
            <FancyLinkStyled>Season 2</FancyLinkStyled>
          </Link>
        </LinkTitle>
        <LinkTitle>
          <Link href="/season3">
            <FancyLinkStyled>Season 3</FancyLinkStyled>
          </Link>
        </LinkTitle>
        <LinkTitle>
          <Link href="/season4">
            <FancyLinkStyled>Season 4</FancyLinkStyled>
          </Link>
        </LinkTitle>
      </ContainerStyled>
    </div>
  );
}
