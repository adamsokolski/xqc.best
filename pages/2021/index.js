import HomeHeader from '../../components/HomeHeader'
import styled from 'styled-components'
import Image from 'next/image'
import { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
import { FancyLinkStyled } from '../../components/styles/FancyLinkStyled'
import { BiLinkExternal } from 'react-icons/bi'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import HamburgerBest from '../../components/HamburgerBest'
import Link from 'next/link'

import { xqc2021 } from '../../data/xqc2021'
import { xqc2021contributors } from '../../data/xqc2021contributors'
import { xqc2021channels } from '../../data/xqc2021channels'

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
`
const gradientAnimation = keyframes`
to {
    background-position: 200%;
  }

`

const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 0px 7px 0 #42ff60;
  }
  25%,75% {
    box-shadow: 0 0px 15px 0 #42ff60;
  }
  100% {
    box-shadow: 0 0px 7px 0 #42ff60;
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`

const Title = styled.h2`
  font-size: 2em;
`

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
`

const Categories = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.winners ? 'flex-start' : 'center')};
  flex-direction: row;
  flex-wrap: wrap;
`

const Category = styled.div`
  width: ${(props) => (props.winners ? '30%' : '100%')};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.winners ? 'center' : 'flex-start')};
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${(props) => (props.winners ? '0' : '50px')};
  margin-bottom: ${(props) => (props.winners ? '0' : '20px')};
  margin: 10px;
  padding: 5px;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`

const CategoryTitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
  width: 100%;
`
const Option = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.winners ? '100%' : '30%')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.main4};
  margin: ${(props) => (props.winners ? '0' : '10px')};
  padding: 5px;
  border-radius: 4px;

  box-shadow: 0 0px 4px 0 ${(props) => props.theme.main4};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: 300ms ease-in-out;
  animation: ${(props) => (props.winner ? shadowAnimation : '')} 3s ease
    infinite;

  border: 1px solid
    ${(props) => (props.winner ? props.theme.winnerGreen : 'none')};

  &:hover {
    box-shadow: 0 0px 15px 0 ${(props) => props.theme.main4};
  }

  @media (max-width: 900px) {
    width: 95%;
  }
`

const OptionName = styled.p`
  font-size: 1.1em;
  font-weight: 600;
`

const UnderTitle = styled.div`
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
    font-family: 'Montserrat', sans-serif;
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
`

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
  cursor: ${(props) => (props.cursor == 'true' ? 'pointer' : '')};
  color: ${(props) => {
    switch (props.platform) {
      case 'twitch':
        return '#b073ff'
        break
      case 'reddit':
        return '#ff6e38'
        break
      case 'youtube':
        return '#fc6565'
        break
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
`

const Tags = styled.div`
  top: 5px;
  left: 5px;
  position: absolute;
  z-index: 1;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const ProcentTag = styled.div`
  font-family: 'Montserrat', sans-serif;
  z-index: 1;
  background-color: #333;
  border-radius: 4px;
  padding: 3px 10px;
  font-weight: 600;
  font-size: 1.2em;
  background-color: ${(props) => props.theme.main4};
`

const PlaceTag = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  z-index: 1;
  background-color: #333;
  border-radius: 4px;
  padding: 3px 10px;
  font-weight: ${(props) => (props.winner ? 700 : 600)};
  font-size: 1.2em;
  color: white;
  background-color: ${(props) => props.theme.main4};

  span {
    background: radial-gradient(circle, #00ff42 0%, #00e98a 50%, #00cfc6 100%);
    animation: ${gradientAnimation} 6s cubic-bezier(0.68, -0.6, 0.32, 1.6)
      infinite;
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const NextYearGreetings = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => props.theme.main4};
  margin: 50px;
  padding: 20px;
  font-size: 3em;
  font-weight: 600;
  border-radius: 4px;

  a {
    font-weight: 800;
    background: radial-gradient(circle, #00ff42 0%, #00e98a 50%, #00cfc6 100%);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const ShowWinnersBox = styled.div`
  font-size: 1.2em;
  font-weight: 400;
  margin: 0 10px;
  padding: 5px 10px;
  background-color: rgba(124, 255, 54, 0.2);
  border-radius: 4px;
  strong {
    font-size: 1.4em;
    font-weight: 700;
  }
`

export default function Index({ headerImg }) {
  const [showContributors, setShowContributors] = useState(false)
  const [showChannels, setShowChannels] = useState(false)
  const [showOnlyWinners, setShowOnlyWinners] = useState(false)

  const placeSwitch = (place) => {
    switch (place) {
      case 2:
        return '2nd'
      case 3:
        return '3rd'
      default:
        return `${place}th`
    }
  }

  return (
    <Container>
      <HomeHeader headerImg={headerImg} />
      <HamburgerBest />
      <Title>Best of XQC 2021</Title>

      <UnderTitle>
        <ShowWinnersBox>
          <strong>ONLY WINNERS</strong>{' '}
          <Contributor
            cursor="true"
            onClick={() => setShowOnlyWinners(!showOnlyWinners)}
          >
            {showOnlyWinners ? (
              <>
                <BsEyeSlashFill /> <span>Hide</span>
              </>
            ) : (
              <>
                <BsEyeFill /> <span>Show</span>
              </>
            )}
          </Contributor>
        </ShowWinnersBox>
      </UnderTitle>
      <UnderTitle>
        <strong>Contributors</strong>:{' '}
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
        <strong>Clips from</strong>:{' '}
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
      <Categories winners={showOnlyWinners}>
        {!showOnlyWinners &&
          xqc2021.categories.map((category) => (
            <Category key={category.name} className={category.id}>
              <CategoryTitle>{category.name}</CategoryTitle>
              {category.options.map((option) => (
                <Option key={option.id} winner={option.winner}>
                  <ImageContainer>
                    {option.name ? (
                      <>
                        {' '}
                        <Tags>
                          <ProcentTag>{option.votesProcent}%</ProcentTag>
                          {option.winner ? (
                            <PlaceTag winner={true}>
                              <Image
                                src="/images/emotes/EZ.png"
                                width="18px"
                                height="18px"
                                alt="EZ emote"
                              />{' '}
                              <span>1st</span>
                            </PlaceTag>
                          ) : (
                            <PlaceTag> {placeSwitch(option.place)}</PlaceTag>
                          )}
                        </Tags>
                        <Image
                          src={option.thumbnail}
                          height="300px"
                          width="450px"
                          alt={option.name}
                          quality={40}
                          placeholder="blur"
                          blurDataURL="/images/10px2.png"
                        />
                      </>
                    ) : (
                      ''
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
                      ''
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
        {/* WINNERS */}
        {showOnlyWinners &&
          xqc2021.categories.map((category) => (
            <Category
              key={category.name + '-winners'}
              className={category.id}
              winners={true}
            >
              <CategoryTitle>{category.name}</CategoryTitle>
              {category.options.map((option) => (
                <>
                  {option.winner ? (
                    <Option
                      key={option.id + '-winners'}
                      winners={option.winner}
                    >
                      <ImageContainer>
                        {option.name ? (
                          <>
                            {' '}
                            <Tags>
                              <ProcentTag>{option.votesProcent}%</ProcentTag>
                              {option.winner ? (
                                <PlaceTag>
                                  <Image
                                    src="/images/emotes/EZ.png"
                                    width="18px"
                                    height="18px"
                                    alt="EZ emote"
                                  />{' '}
                                  <span>1st</span>
                                </PlaceTag>
                              ) : (
                                ''
                              )}
                            </Tags>
                            <Image
                              src={option.thumbnail}
                              height="300px"
                              width="450px"
                              alt={option.name}
                              quality={40}
                              placeholder="blur"
                              blurDataURL="/images/10px2.png"
                            />
                          </>
                        ) : (
                          ''
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
                          ''
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
                  ) : (
                    ''
                  )}
                </>
              ))}
            </Category>
          ))}
      </Categories>
      <NextYearGreetings>
        See you in{' '}
        <Link href="/2022">
          <a>2022</a>
        </Link>{' '}
        <Image
          src="/images/emotes/xqcl.png"
          width="64px"
          height="64px"
          alt="EZ emote"
        />
      </NextYearGreetings>
    </Container>
  )
}
