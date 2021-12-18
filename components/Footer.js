import { FooterStyled } from "./styles/FooterStyled";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { FancyLinkStyled } from "./styles/FancyLinkStyled";

const ImageWrapper = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: flex-end;
`;

const InlineLink = styled.span`
  margin-left: 5px;
`;

export default function Footer() {
  return (
    <FooterStyled>
      Made with{" "}
      <ImageWrapper>
        <Image
          src="/images/heart.png"
          width="15px"
          height="15px"
          className="footer-image"
          alt="pixel heart"
        />{" "}
      </ImageWrapper>
      by
      <Link href="/credits">
        <InlineLink>
          <FancyLinkStyled>NiceDevTools</FancyLinkStyled>
        </InlineLink>
      </Link>
      <span className="footer-small">in chat</span>
    </FooterStyled>
  );
}
