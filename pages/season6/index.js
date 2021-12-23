import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { season6 } from "../../data/season6";

const DragDrop = dynamic(import("../../components/DragDrop"));
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default function Index() {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  return winReady ? (
    <Container>
      {" "}
      <DragDrop season={season6} />
    </Container>
  ) : null;
}
