import Image from 'next/image'
import styled from 'styled-components'
import HomeHeader from '../../components/HomeHeader'
import { FancyLinkStyled } from '../../components/styles/FancyLinkStyled'
import { BiCookie } from 'react-icons/bi'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`
const CreditLink = styled.span`
  color: ${(props) => props.theme.main1};
  font-weight: 700;
`

const Text = styled.p`
  max-width: 600px;
  font-size: 1.2em;
  margin: 10px 20px;
`

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`

export default function Cookies({ headerImg }) {
  return (
    <>
      <HomeHeader headerImg={headerImg} />
      <Container>
        <Title>
          <BiCookie /> Cookies
        </Title>
        <Text>
          <FancyLinkStyled
            href="https://www.xqc.best/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CreditLink>xqc.best</CreditLink>
          </FancyLinkStyled>{' '}
          uses its own technical cookies in order to save tier list progress.
        </Text>
        <Text>
          <FancyLinkStyled
            href="https://www.xqc.best/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CreditLink>xqc.best</CreditLink>
          </FancyLinkStyled>{' '}
          uses Google Analytics cookies to count the number of site visits. For
          information about the cookies used to visit the appropriate{' '}
          <FancyLinkStyled
            href="https://policies.google.com/technologies/cookies#types-of-cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CreditLink> page of Google.</CreditLink>
          </FancyLinkStyled>{' '}
        </Text>
        <Text>
          If you don&apos;t wish to accept cookies, you should instruct your
          browser to refuse cookies from{' '}
          <FancyLinkStyled
            href="https://www.xqc.best/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CreditLink>xqc.best</CreditLink>
          </FancyLinkStyled>
          . In such a case, tier list won&apos;t save.
        </Text>
      </Container>
    </>
  )
}
