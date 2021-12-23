import { ContainerStyled } from "../components/styles/ContainerStyled";
import Link from "next/link";
import HomeHeader from "../components/HomeHeader";
import styled from "styled-components";
import { FancyLinkStyled } from "../components/styles/FancyLinkStyled";
import { keyframes } from "styled-components";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const gradientAnimation = keyframes`
 to {
      background-position: 200%;
    }
`;

const LinkTitle = styled.h3`
  position: relative;
  font-size: 30px;
  margin: 25px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewTag = styled.span`
  right: -60px;
  position: absolute;
  font-size: 20px;
  background: radial-gradient(
    circle,
    ${(props) => props.theme.main1} 0%,
    rgba(255, 199, 95, 1) 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-weight: 900;
  font-style: italic;

  animation: ${gradientAnimation} 4s cubic-bezier(0.68, -0.6, 0.32, 1.6)
    infinite;
  border-radius: 20px;
  padding: 2px 5px 5px 5px;
`;

export default function Home({ headerImg }) {
  return (
    <div>
      <HomeHeader headerImg={headerImg} />
      <ContainerStyled>
        <Link href="/2021">
          <LinkTitle>
            <FancyLinkStyled>Best of XQC 2021</FancyLinkStyled>
            <NewTag>New</NewTag>
          </LinkTitle>
        </Link>
        <Link href="/masterchef">
          <LinkTitle>
            <FancyLinkStyled>MasterChef tier list</FancyLinkStyled>
          </LinkTitle>
        </Link>
      </ContainerStyled>
    </div>
  );
}
