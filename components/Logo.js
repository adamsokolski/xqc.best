import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { xqcEmotes } from "../data/logoEmotesXqc";
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

export default function Logo() {
  function shuffle(array) {
    let orginalArr = [...array];
    let randomArr = [];
    let maxIndex = array.length - 1;
    while (maxIndex >= 0) {
      let tempRandom = Math.floor(Math.random() * (orginalArr.length - 1));
      randomArr.push(orginalArr[tempRandom]);
      orginalArr = orginalArr.filter((item) => item !== orginalArr[tempRandom]);
      maxIndex--;
    }
    return randomArr;
  }

  const [headerImg, setHeaderImg] = useState("/images/xqc-logo.webp");
  useEffect(() => {
    const numArr = [];
    for (let i = 0; i < xqcEmotes.length; i++) {
      numArr[i] = i;
    }

    const randomArr = shuffle(numArr);
    let index = 0;
    setTimeout(() => {
      setHeaderImg("/images/PepeLaugh.png");

      setInterval(() => {
        setHeaderImg(xqcEmotes[randomArr[index]].img);
        index++;
        if (index >= xqcEmotes.length) {
          index = 0;
        }
      }, 5000);
    }, 5000);
  }, []);
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
