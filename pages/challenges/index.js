import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { challenges } from "../../data/challenges";
import { keyframes } from "styled-components";

const DragDrop = dynamic(import("../../components/DragDrop"));
const Container = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
`;
const Info = styled.p`
  position: static;
  width: 100%;
  text-align: center;
  font-weight: 300;
  opacity: 0.7;
  strong {
    cursor: pointer;
  }
`;
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10%,90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const Copied = styled.div`
  margin-left: 5px;
  font-weight: 500;
  display: inline-block;
  position: absolute;
  animation: ${fadeInOut} 1s linear;
`;

export default function Index() {
  const [winReady, setwinReady] = useState(false);
  const [discordName, setDiscordName] = useState("NiceDevTools#0211");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  return winReady ? (
    <>
      <Info>
        If you know challenge, that is missing send it to{" "}
        <strong
          onClick={() => {
            navigator.clipboard.writeText(discordName);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
        >
          NiceDevTools#0211
        </strong>
        , thanks. {copied ? <Copied>Copied!</Copied> : ""}
      </Info>
      <Container>
        <DragDrop season={challenges} />
      </Container>
    </>
  ) : null;
}
