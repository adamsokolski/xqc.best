import { ContainerStyled } from '../components/styles/ContainerStyled'
import Link from 'next/link'
import HomeHeader from '../components/HomeHeader'
import styled from 'styled-components'
import { FancyLinkStyled } from '../components/styles/FancyLinkStyled'
import { keyframes } from 'styled-components'
import Image from 'next/image'

const gradientAnimation = keyframes`
 to {
      background-position: 200%;
    }
`

const LinkTitle = styled.h3`
  position: relative;
  font-size: 30px;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ImageContainer = styled.div`
  z-index: 11;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  img {
    border-radius: 4px;
    overflow: hidden;
    object-fit: cover;
    object-position: center center;
    cursor: pointer;
  }
`

export default function Home({ headerImg }) {
  return (
    <div>
      <HomeHeader headerImg={headerImg} />
      <ContainerStyled>
        <Link href="/2021" passHref>
          <LinkTitle>
            <ImageContainer>
              <Image
                src="/images/bestof2021xqc.png"
                width="300px"
                height="300px"
                alt="Emotes of xqc with 2021 heading"
              />
            </ImageContainer>

            <FancyLinkStyled>Best of XQC 2021</FancyLinkStyled>
          </LinkTitle>
        </Link>
        <Link href="/masterchef" passHref>
          <LinkTitle>
            <ImageContainer>
              <Image
                src="/images/masterchef.webp"
                width="300px"
                height="300px"
                alt="Masterchef trophy"
              />
            </ImageContainer>
            <FancyLinkStyled>MasterChef tier list</FancyLinkStyled>
          </LinkTitle>
        </Link>
      </ContainerStyled>
    </div>
  )
}
