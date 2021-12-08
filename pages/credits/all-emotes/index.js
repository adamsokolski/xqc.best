import { xqcEmotes } from "../../../data/logoEmotesXqc";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function AllEmotes() {
  const images = xqcEmotes.map((emote) => (
    <Image
      src={emote.img}
      width="128"
      height="128"
      key="emote.id"
      alt="emote of streamer xQcOW"
    />
  ));

  return <Container>{images}</Container>;
}
