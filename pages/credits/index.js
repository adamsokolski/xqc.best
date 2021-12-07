import Image from "next/image";
import { CreditListStyled } from "../../components/styles/CreditListStyled";

// Todo: Credit list - 7tv emotes

export default function credits() {
  return (
    <CreditListStyled>
      <div>
        <h2>xqc.best</h2>
        <ul>
          <li>
            NiceDevTools -{"  "}
            <Image
              src="/images/HACKERMANS_Greekgodx.gif"
              width="50"
              height="50"
            />{" "}
          </li>
        </ul>
        <h2>logo emotes - 7tv.app</h2>
        <ul>
          <li>Soon...</li>
        </ul>
      </div>
    </CreditListStyled>
  );
}
