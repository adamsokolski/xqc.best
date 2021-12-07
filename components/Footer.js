import { FooterStyled } from "./styles/FooterStyled";
import Image from "next/image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  margin: 0 5px;
  display: flex;
  align-items: flex-end;
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
        />{" "}
      </ImageWrapper>
      by NiceDevTools <span className="footer-small">in chat</span>
    </FooterStyled>
  );
}
