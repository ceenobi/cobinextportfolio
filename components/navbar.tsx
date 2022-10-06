import React, { useState, useEffect } from 'react'
import { Flex, Text, Link, Icon, Box } from '@chakra-ui/react'
import { ImTwitter } from 'react-icons/im'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false)
  const [showColor, setShowColor] = useState<string>('')
  const [path, setPath] = useState<boolean>(false)
  const [pathB, setPathB] = useState<boolean>(false)
  const router = useRouter()
  let slug = router.query['slug']

  const showNav = () => {
    window.scrollY >= 60 ? setNavbar(true) : setNavbar(false)
  }

  useEffect(() => {
    showNav()
    window.addEventListener('scroll', showNav)
    return () => {
      window.removeEventListener('scroll', showNav)
    }
  })

  useEffect(() => {
    if (router.pathname === '/contact' || router.pathname === '/works') {
      setShowColor('cream')
    }
    if (
      router.pathname === '/' ||
      router.pathname === '/about' ||
      router.asPath === `/works/${slug}`
    ) {
      setShowColor('lightBlack')
    }
  }, [router.pathname, router.asPath, slug])

  useEffect(() => {
    if (router.asPath !== `/works/${slug}` && router.asPath !== '/') {
      setPath(true)
    } else {
      setPath(false)
    }
  }, [router.asPath, slug])

  useEffect(() => {
    if (router.asPath === `/works/${slug}`) {
      setPathB(true)
    } else {
      setPathB(false)
    }
  }, [router.asPath, slug])

  return (
    <Flex
      position='fixed'
      top={0}
      zIndex={2}
      align='center'
      direction={{ base: 'row', md: 'column' }}
      h={{ base: 16, md: '100vh' }}
      p={8}
      w={{ base: 'full', md: '20' }}
      className={navbar ? 'navbar-active' : 'navbar'}
      color={showColor}
    >
      <Flex flex='1'>
        <Flex gap={6} direction={{ base: 'row', md: 'column' }} align='center'>
          {path && (
            <Link href='/' className='write'>
              Home
            </Link>
          )}
          {pathB && <Link href='/works'>Works</Link>}
          {router.pathname === '/' && (
            <>
              <Link href='https://github.com/ceenobi' isExternal>
                <Icon
                  as={FaGithubSquare}
                  boxSize='25px'
                  _hover={{ color: 'cyan.600' }}
                />
              </Link>
              <Link
                href='https://www.linkedin.com/in/charles-mbachu-40bb66173/'
                isExternal
              >
                <Icon
                  as={FaLinkedin}
                  boxSize='25px'
                  _hover={{ color: 'blue.500' }}
                />
              </Link>
              <Link href='https://www.twitter.com/ceenobii' isExternal>
                <Icon
                  as={ImTwitter}
                  boxSize='25px'
                  _hover={{ color: 'blue.300' }}
                />
              </Link>
            </>
          )}

          <Box
            height={{ base: '0px', md: '80px' }}
            width={{ base: '80px', md: '0.8px' }}
            border='1px'
            bg={showColor}
            mx='auto'
          />
        </Flex>
      </Flex>
      <Text fontSize='sm' className='write'>
        ©/2022
      </Text>
    </Flex>
  )
}
