import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const DragDrop = dynamic(import("./DragDrop"));
export default function Index() {
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);
  return winReady ? <DragDrop /> : null;
}
