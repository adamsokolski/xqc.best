import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HeaderStyled } from "./styles/HeaderStyled";
import { xqcEmotes } from "../data/logoEmotesXqc";

export default function Header() {
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
    <HeaderStyled>
      <div>
        <Link href="/">
          <a>
            <Image src={headerImg} width="128px" height="128px" />
            <span>x</span>
            <Image
              src="/images/masterchef-logo.svg"
              width="128px"
              height="128px"
            />
          </a>
        </Link>
      </div>
      <nav>
        <Link href="/credits">
          <a>credits</a>
        </Link>
      </nav>
    </HeaderStyled>
  );
}
