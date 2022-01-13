import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HomeLink = styled.a`
  border-bottom: 1px solid white;
  cursor: pointer;
`

const NotFound = () => {
  const [redirectTimer, setRedirectTimer] = useState(10)

  useEffect(() => {
    const router = useRouter()
    setTimeout(() => {
      router.push('/')
    }, 10000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setRedirectTimer(redirectTimer - 1)
    }, 1000)
  }, [redirectTimer])
  return (
    <Container>
      <h1>Page not found... 😕</h1>
      <p>
        You&apos;ll be redirected to the{' '}
        <Link href="/" passHref>
          <HomeLink className="fancy-link">Homepage</HomeLink>
        </Link>{' '}
        in {redirectTimer} seconds.
      </p>
    </Container>
  )
}

export default NotFound
