import styled from "styled-components";
import { FancyLinkStyled } from "./styles/FancyLinkStyled";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Turn as Ham } from "hamburger-react";
import { keyframes } from "styled-components";
import { xqc2021 } from "../data/xqc2021";
import * as Scroll from "react-scroll";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

let LinkScroll = Scroll.Link;

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
  position: fixed;
  top: 0;
  display: flex;
  align-items: flex-end;
  padding: 5px;
  padding-right: 20px;
  justify-content: center;
  flex-direction: column;
  z-index: 20;
  width: 100%;
  background-color: #282828;

  .hidden {
    animation: ${fadeOut} 250ms ease;
  }
`;
const List = styled.div`
  z-index: 60;
  background-color: #282828;
  position: absolute;
  top: 50px;
  background-color: ${(props) => props.theme.main4};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  padding: 2px;
  animation: ${fadeIn} 250ms ease;
  a {
    font-size: 1.05em;
    margin: 5px 15px;
  }
  @media (max-width: 900px) {
    padding: 1px;
  }
`;

export default function HamburgerBest() {
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

  return (
    <Container>
      <Ham toggled={isOpen} toggle={setIsOpen} />
      {outAnim && (
        <List className={!isOpen ? "hidden" : ""}>
          {xqc2021.categories.map((category) => (
            <LinkScroll
              key={category.id}
              to={category.id}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              <FancyLinkStyled>{category.name}</FancyLinkStyled>
            </LinkScroll>
          ))}
        </List>
      )}
    </Container>
  );
}
