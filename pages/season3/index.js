import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DragDrop = dynamic(import("./DragDrop"));
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
      <DragDrop />
    </Container>
  ) : null;
}
