import Image from "next/image";
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
    console.log(numArr);

    const randomArr = shuffle(numArr);
    console.log(randomArr);
    let index = 0;
    setTimeout(() => {
      setHeaderImg("/images/PepeLaugh.png");

      setInterval(() => {
        setHeaderImg(xqcEmotes[randomArr[index]].img);
        console.log(randomArr[index], xqcEmotes[randomArr[index]].img, index);
        index++;
        if (index >= xqcEmotes.length) {
          index = 0;
        }
      }, 3000);
    }, 2000);
  }, []);
  return (
    <HeaderStyled>
      <Image src={headerImg} width="64px" height="64px" />
      <span>x</span>
      <Image src="/images/masterchef-logo.svg" width="64px" height="64px" />
    </HeaderStyled>
  );
}
