import Image from "next/image";
import { HeaderStyled } from "./styles/HeaderStyled";

export default function Header() {
  return (
    <HeaderStyled>
      <Image src="/images/xqc-logo.jpg" width="64px" height="64px" />
      <span>x</span>
      <Image src="/images/masterchef-logo.svg" width="64px" height="64px" />
    </HeaderStyled>
  );
}
