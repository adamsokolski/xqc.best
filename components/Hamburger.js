import styled from "styled-components";
import Link from "next/link";
import { FancyLinkStyled } from "./styles/FancyLinkStyled";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Turn as Ham } from "hamburger-react";
import { keyframes } from "styled-components";
import Swal from "sweetalert2";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
 
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
 
`;

const Container = styled.div`
  position: absolute;
  right: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 20;

  .hidden {
    animation: ${fadeOut} 250ms ease;
  }
  @media (max-width: 900px) {
    right: 40px;
    padding: 0;
  }
`;
const List = styled.div`
  position: absolute;
  top: 50px;
  background-color: ${(props) => props.theme.main4};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  padding: 10px;
  animation: ${fadeIn} 250ms ease;
  a {
    font-size: 1.1em;
    margin: 5px 15px;
  }
  @media (max-width: 900px) {
    padding: 1px;
  }
`;

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [outAnim, setOutAnim] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setOutAnim(isOpen);
      }, 250);
    } else {
      setOutAnim(isOpen);
    }
  }, [isOpen]);

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
    <Container>
      <Ham toggled={isOpen} toggle={setIsOpen} />

      {outAnim && (
        <List className={!isOpen ? "hidden" : ""}>
          <Link href="/challenges">
            <FancyLinkStyled>Challenges</FancyLinkStyled>
          </Link>
          <Link href="/season1">
            <FancyLinkStyled>Season 1</FancyLinkStyled>
          </Link>
          <Link href="/season2">
            <FancyLinkStyled>Season 2</FancyLinkStyled>
          </Link>
          <Link href="/season3">
            <FancyLinkStyled>Season 3</FancyLinkStyled>
          </Link>
          <Link href="/season4">
            <FancyLinkStyled>Season 4</FancyLinkStyled>
          </Link>
          <Link href="/season5">
            <FancyLinkStyled>Season 5</FancyLinkStyled>
          </Link>
          <Link href="/season6">
            <FancyLinkStyled>Season 6</FancyLinkStyled>
          </Link>
          <Link href="">
            <FancyLinkStyled onClick={() => AllSeasonsClicked()}>
              Seasons 1-5 (Top 5)
            </FancyLinkStyled>
          </Link>
          <Link href="/credits">
            <FancyLinkStyled>Credits</FancyLinkStyled>
          </Link>
        </List>
      )}
    </Container>
  );
}
