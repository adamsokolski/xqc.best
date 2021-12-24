import { ContainerStyled } from "../../components/styles/ContainerStyled";
import Link from "next/link";
import HomeHeader from "../../components/HomeHeader";
import styled from "styled-components";
import { FancyLinkStyled } from "../../components/styles/FancyLinkStyled";
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0;
`;

export default function Masterchef({ headerImg }) {
  const router = useRouter();

  const AllSeasonsClicked = () => {
    Swal.fire({
      title: `Potential spoilers`,
      imageUrl: "/images/logo-emotes/xqcBased-AtypicalLUL.webp",
      text: "This page will have spoilers of top 5 from 1-5 seasons. Do you want to continue?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
      color: "white",
      background: "#333",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        router.push("/all-seasons");
      }
    });
  };
  return (
    <div>
      <HomeHeader headerImg={headerImg} underTitle={true} />
      <Container>
        <Link href="/challenges">
          <LinkTitle>
            <FancyLinkStyled>Challenges</FancyLinkStyled>
            <NewTag>New</NewTag>
          </LinkTitle>
        </Link>
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
        <LinkTitle>
          <Link href="/season5">
            <FancyLinkStyled>Season 5</FancyLinkStyled>
          </Link>
        </LinkTitle>
        <Link href="/season6">
          <LinkTitle>
            <FancyLinkStyled>Season 6 </FancyLinkStyled>
            <NewTag>New</NewTag>
          </LinkTitle>
        </Link>
        <Link href="">
          <LinkTitle>
            <FancyLinkStyled
              onClick={() => {
                AllSeasonsClicked();
              }}
            >
              Seasons 1-5 (Top 5)
            </FancyLinkStyled>
            <NewTag>New</NewTag>
          </LinkTitle>
        </Link>
      </Container>
    </div>
  );
}
