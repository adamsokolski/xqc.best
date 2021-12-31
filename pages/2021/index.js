import HomeHeader from "../../components/HomeHeader";
import styled from "styled-components";
import Image from "next/image";
import { keyframes } from "styled-components";
import { useState } from "react";
import { FancyLinkStyled } from "../../components/styles/FancyLinkStyled";
import { BiLinkExternal } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import HamburgerBest from "../../components/HamburgerBest";

import { xqc2021 } from "../../data/xqc2021";
import { xqc2021contributors } from "../../data/xqc2021contributors";
import { xqc2021channels } from "../../data/xqc2021channels";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 2em;
`;

const ImageContainer = styled.div`
  z-index: 11;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 4px;
    overflow: hidden;
    object-fit: cover;
    object-position: center center;
    transition: 300ms ease-in-out;
  }
`;

const Categories = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
  width: 100%;
`;
const Option = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.main4};
  margin: 10px;
  padding: 5px;
  border-radius: 4px;

  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.37);
  }

  @media (max-width: 900px) {
    width: 95%;
  }
`;

const OptionName = styled.p`
  font-size: 1.1em;
  font-weight: 600;
`;

const UnderTitle = styled.p`
  text-align: center;
  line-height: 35px;
  margin: 10px 20px;
  font-size: 1.2em;
  max-width: 900px;

  .pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
  }
  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
  .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    );
  }
  .front {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    display: block;
    position: relative;
    padding: 12px 42px;
    border-radius: 12px;
    font-size: 1.25rem;
    color: white;
    background: hsl(345deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }
  .pushable:hover {
    filter: brightness(110%);
  }
  .pushable:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }
  .pushable:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  .pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }
  .pushable:focus:not(:focus-visible) {
    outline: none;
  }
`;

const Important = styled.span`
  font-size: 1.4em;
  font-weight: 600;
  margin: 0 10px;
  padding: 5px 10px;
  background-color: rgba(252, 50, 50, 0.5);
  border-radius: 4px;
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

const Strong = styled.strong`
  cursor: pointer;
`;

const Contributor = styled.span`
  font-size: 0.8em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 3px 5px;
  background-color: #222;
  border-radius: 4px;
  padding: 0 5px;
  transition: 300ms ease-in-out;
  cursor: ${(props) => (props.cursor == "true" ? "pointer" : "")};
  color: ${(props) => {
    switch (props.platform) {
      case "twitch":
        return "#b073ff";
        break;
      case "reddit":
        return "#ff6e38";
        break;
      case "youtube":
        return "#fc6565";
        break;
    }
  }};
  font-weight: 600;
  span {
    margin-left: 5px;
  }

  &:hover {
    background-color: #111;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: 300ms ease-in-out;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.37);
  }
`;

const VoteButton = styled.button``;

const VoteLink = styled.a``;

const UnderVoteButton = styled.span`
  display: block;
  font-size: 1em;
  font-weight: 600;
  margin: 10px;
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: rgba(252, 50, 50, 0.2);
  border-radius: 4px;
`;

export default function Index({ headerImg }) {
  const [discordName, setDiscordName] = useState("NiceDevTools#0211");
  const [copied, setCopied] = useState(false);
  const [showContributors, setShowContributors] = useState(false);
  const [showChannels, setShowChannels] = useState(false);

  return (
    <Container>
      <HomeHeader headerImg={headerImg} />
      <HamburgerBest />
      <Title>Best of XQC 2021</Title>
      <UnderTitle>
        <VoteLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSeUFx91_m517Lz-V-yo183K80Gv3fPjh_wBKyxKCpYmFuDH1Q/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VoteButton className="pushable">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">VOTE HERE</span>
          </VoteButton>
        </VoteLink>
        <UnderVoteButton>
          <Image
            src="/images/emotes/DinkDonk.gif"
            alt="emote of donk"
            width="32"
            height="32"
          />
          mr cow this will show your email!
        </UnderVoteButton>
      </UnderTitle>
      <UnderTitle>
        <strong>Contributors</strong>:{" "}
        <Contributor
          cursor="true"
          onClick={() => setShowContributors(!showContributors)}
        >
          {showContributors ? (
            <>
              <BsEyeSlashFill /> <span>Hide</span>
            </>
          ) : (
            <>
              <BsEyeFill /> <span>Show</span>
            </>
          )}
        </Contributor>
        {showContributors &&
          xqc2021contributors.map((user) => (
            <Contributor key={user.name} platform={user.platform}>
              {user.name}
            </Contributor>
          ))}
        {}
      </UnderTitle>

      <UnderTitle>
        <strong>Clips from</strong>:{" "}
        <Contributor
          cursor="true"
          onClick={() => setShowChannels(!showChannels)}
        >
          {showChannels ? (
            <>
              <BsEyeSlashFill /> <span>Hide</span>
            </>
          ) : (
            <>
              <BsEyeFill /> <span>Show</span>
            </>
          )}
        </Contributor>
        {showChannels &&
          xqc2021channels.map((channel) => (
            <Contributor key={channel.name} platform={channel.platform}>
              <a href={channel.link} target="_blank" rel="noopener noreferrer">
                {channel.name}
              </a>
            </Contributor>
          ))}
      </UnderTitle>
      <Categories>
        {xqc2021.categories.map((category) => (
          <Category key={category.name} className={category.id}>
            <CategoryTitle>{category.name}</CategoryTitle>
            {category.options.map((option) => (
              <Option key={option.id}>
                <ImageContainer>
                  {option.name ? (
                    <Image
                      src={option.thumbnail}
                      height="300px"
                      width="450px"
                      alt={option.name}
                      placeholder="blur"
                      blurDataURL="/images/logo-emotes/xqcSCAREDOFGIRLS-fraserlol.webp"
                    />
                  ) : (
                    ""
                  )}
                </ImageContainer>
                <OptionName>
                  {option.nameImg ? (
                    <Image
                      src={option.nameImg}
                      height="28"
                      width="28"
                      alt={option.name}
                    />
                  ) : (
                    ""
                  )}
                  {option.link ? (
                    <FancyLinkStyled
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {option.name} <BiLinkExternal />
                    </FancyLinkStyled>
                  ) : (
                    option.name
                  )}

                  {}
                </OptionName>
              </Option>
            ))}
          </Category>
        ))}
      </Categories>
    </Container>
  );
}
