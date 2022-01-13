import styled from 'styled-components'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Turn as Ham } from 'hamburger-react'
import { keyframes } from 'styled-components'
import Swal from 'sweetalert2'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
 
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
 
`

const LinkStyled = styled.a`
  cursor: pointer;
  width: 100%;
  transition: 50ms ease-in-out;
  padding: 3px 20px;
  border-bottom: 1px rgba(255, 255, 255, 0.1) solid;

  &:hover {
    background-color: ${(props) => props.theme.main3};
  }
`

const Container = styled.div`
  position: absolute;
  right: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 20;

  .hidden {
    animation: ${fadeOut} 250ms ease;
  }
  @media (max-width: 900px) {
    right: 40px;
    padding: 0;
  }
`
const List = styled.div`
  z-index: 60;
  background-color: #282828;
  position: absolute;
  top: 50px;
  background-color: ${(props) => props.theme.main4};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  animation: ${fadeIn} 250ms ease;
  border: 1px ${(props) => props.theme.main3} solid;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: 300ms ease-in-out;

  @media (max-width: 900px) {
    padding: 1px;
  }
`

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false)
  const [outAnim, setOutAnim] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setIsOpen(false)
  }, [router.pathname])
  useEffect(() => {
    if (!isOpen) {
      setOutAnim(isOpen)
    } else {
      setOutAnim(isOpen)
    }
  }, [isOpen])

  const AllSeasonsClicked = () => {
    Swal.fire({
      title: `Potential spoilers`,
      imageUrl: '/images/logo-emotes/xqcBased-AtypicalLUL.webp',
      text: 'This page will have spoilers of top 5 from 1-6 seasons. Do you want to continue?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      color: 'white',
      background: '#333',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        router.push('/all-seasons')
      }
    })
  }
  return (
    <Container>
      <Ham toggled={isOpen} toggle={setIsOpen} />

      {outAnim && (
        <List className={!isOpen ? 'hidden' : ''}>
          <Link href="/challenges" passHref>
            <LinkStyled>Challenges</LinkStyled>
          </Link>
          <Link href="/season1" passHref>
            <LinkStyled>Season 1</LinkStyled>
          </Link>
          <Link href="/season2" passHref>
            <LinkStyled>Season 2</LinkStyled>
          </Link>
          <Link href="/season3" passHref>
            <LinkStyled>Season 3</LinkStyled>
          </Link>
          <Link href="/season4" passHref>
            <LinkStyled>Season 4</LinkStyled>
          </Link>
          <Link href="/season5" passHref>
            <LinkStyled>Season 5</LinkStyled>
          </Link>
          <Link href="/season6" passHref>
            <LinkStyled>Season 6</LinkStyled>
          </Link>
          <Link href="/season7" passHref>
            <LinkStyled>Season 7</LinkStyled>
          </Link>
          <Link href="" passHref>
            <LinkStyled onClick={() => AllSeasonsClicked()}>
              Seasons 1-6 (Top 5)
            </LinkStyled>
          </Link>
          <Link href="/credits" passHref>
            <LinkStyled>Credits</LinkStyled>
          </Link>
        </List>
      )}
    </Container>
  )
}
