import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { emotesAuthors } from "../../data/emotesAuthors";
import { FancyLinkStyled } from "../../components/styles/FancyLinkStyled";

const CreditListStyled = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  strong {
    margin-right: 5px;
  }
`;

const AuthorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  li {
    padding: 5px 10px;
    list-style-type: none;
  }
`;

const CreditLink = styled.span`
  color: ${(props) => props.theme.main1};
  font-weight: 700;
`;

export default function credits() {
  const sevenTv = emotesAuthors["7tv"].map((emote) => (
    <li key={emote.id}>{emote.name}</li>
  ));
  const betterTtv = emotesAuthors["bttv"].map((emote) => (
    <li key={emote.id}>{emote.name}</li>
  ));
  const frankerFacez = emotesAuthors["ffz"].map((emote) => (
    <li key={emote.id}>{emote.name}</li>
  ));
  const reddit = emotesAuthors["reddit"].map((emote) => (
    <li key={emote.id}>{emote.name}</li>
  ));
  return (
    <CreditListStyled>
      <div>
        <h2>xqc.best</h2>
        <FancyLinkStyled
          href="https://github.com/adamsokolski/xqc-mastercher-tierlist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CreditLink>GitHub</CreditLink>
        </FancyLinkStyled>
        <ul>
          <li>
            <strong>xQcOW</strong>- Concept Creator{"  "}
            <Image
              src="/images/emotes/pepe5Head.webp"
              width="50"
              height="50"
              alt="emote of pepe the frog with huge head"
            />{" "}
          </li>
          <li>
            <strong>NiceDevTools#0211</strong> - Front End Developer{"  "}
            <Image
              src="/images/emotes/HACKERMANS_Greekgodx.gif"
              width="50"
              height="50"
              alt="emote of streamer GreekGodx typing"
            />{" "}
          </li>
        </ul>
        <h2>Emotes</h2>

        <Link href="/credits/all-emotes">
          <FancyLinkStyled>
            <CreditLink>All emotes </CreditLink>
            <Image
              src="/images/emotes/WAYTOODANK.gif"
              width="50"
              height="50"
              alt="emote of pepe the frog with huge head"
            />
          </FancyLinkStyled>
        </Link>

        <h3>7tv.app</h3>
        <AuthorsList>{sevenTv}</AuthorsList>
        <h3>BetterTTV.com</h3>
        <AuthorsList>{betterTtv}</AuthorsList>
        <h3>frankerfacez.com</h3>
        <AuthorsList>{frankerFacez}</AuthorsList>
        <h3>r/xQcOW</h3>
        <AuthorsList>{reddit}</AuthorsList>
      </div>
    </CreditListStyled>
  );
}
