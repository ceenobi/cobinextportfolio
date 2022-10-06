import React from 'react'
import { Box, Flex, VStack, Heading, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name='description' content='Where am I ?' />
      </Head>
      <Flex
        py={{ base: 16, sm: '9.3rem', md: '4rem' }}
        px={{ base: 8, md: '7rem' }}
        bg='lightBlack'
        color='cream'
        direction='column'
        justify={{ base: 'start', md: 'center' }}
        align='start'
        minH='100vh'
      >
        <Flex
          justify='center'
          gap='3rem'
          direction='column'
          py={{ base: '0', sm: '4rem', md: '7rem' }}
          as={motion.div}
        >
          <Heading
            fontSize={{
              base: '2.5em',
              sm: '4em',
              md: '7em',
              lg: '6em',
              xl: '9.5em',
            }}
            letterSpacing='wider'
            as={motion.h1}
            whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ delay: '0.5', duration: '0.5' }}
          >
            Hello.
          </Heading>

          <VStack
            spacing={6}
            align='start'
            fontSize={{ base: 'sm', sm: 'md' }}
            as={motion.div}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: '0.5' }}
          >
            <Text>Just keeping this simple.</Text>
            <Box>
              <Box>
                Email:
                <Link
                  href='mailto:cobimbachu@gmail.com'
                  alignItems='center'
                  className='contact'
                >
                  &nbsp;cobimbachu@gmail.com
                </Link>
              </Box>
              <Flex flexWrap='wrap' gap={1}>
                On the internet:
                <Link
                  href='https://www.linkedin.com/in/charles-mbachu-40bb66173/'
                  isExternal
                  className='contact'
                >
                  Linkedin
                </Link>
                /
                <Link
                  href='https://www.twitter.com/ceenobii'
                  isExternal
                  className='contact'
                >
                  Twitter
                </Link>
                /
                <Link
                  href='https://github.com/ceenobi'
                  isExternal
                  className='contact'
                >
                  Github
                </Link>
              </Flex>
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </>
  )
}
