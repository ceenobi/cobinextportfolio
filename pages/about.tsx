import { GetStaticProps } from 'next'
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Link,
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

import { About } from '../types'
import { fetchAboutMe } from '../lib/loadData'

interface IProps {
  abouts: About[]
}

export default function AboutMe({ abouts }: IProps) {
  return (
    <>
      <Head>
        <title>Charles - About me</title>
        <meta name='description' content='Who am I? What I do' />
      </Head>
      <Flex
        py={{ base: 14, sm: '4rem', md: '2rem' }}
        px={{ base: 8, md: '10rem' }}
        minH='100vh'
        gap={10}
        direction={{ base: 'column', lg: 'row' }}
        bg='cream'
        justify='space-between'
        w='full'
      >
        {abouts.map((item) => (
          <Flex
            gap={10}
            align='start'
            direction='column'
            w={{ base: '80vw', md: '60vw', lg: '45vw', xl: '40vw' }}
            key={item._id}
            mx='auto'
            mt='2rem'
          >
            <VStack spacing={6} align='start'>
              <Flex align='center' justify='space-between' w='full'>
                <Heading
                  fontSize={{
                    base: '2.5em',
                    sm: '3.5em',
                    md: '7em',
                    lg: '11em',
                    xl: '13em',
                  }}
                  letterSpacing='wider'
                  as={motion.h1}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: '0.1' }}
                >
                  About
                </Heading>

                <Box
                  w={{ base: '120px', sm: '130px' }}
                  h='auto'
                  display={{ base: 'block', lg: 'none' }}
                  as={motion.div}
                  whileInView={{ x: [50, 100, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: '0.1' }}
                >
                  <Image
                    src='https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_100/v1653075291/icons/1AE31A5C-9AE2-4A25-850F-67ACF1CF0E61_vmvcsv.jpg'
                    layout='responsive'
                    width='100%'
                    height='100%'
                    blurDataURL='URL'
                    placeholder='blur'
                    alt='profilepic'
                  />
                </Box>
              </Flex>
              <Text
                fontSize={{
                  base: '1em',
                  sm: '1.5em',
                  md: '2em',
                  xl: '2em',
                }}
                fontWeight='semibold'
                letterSpacing='wider'
              >
                {item.title}
              </Text>
              <Text>{item.description.slice(0, 150)}</Text>
              <Text>{item.description.slice(150, 355)}</Text>
              <Text>{item.description.slice(355, 550)}</Text>
            </VStack>
            <VStack align='start'>
              <Heading
                as='h2'
                size='lg'
                fontWeight='thin'
                letterSpacing='wider'
                mb={4}
              >
                Experience
              </Heading>
              {item.experience.map((exp: string, index: number) => (
                <Box key={index}>
                  <Text>-{exp}</Text>
                </Box>
              ))}
            </VStack>
            <VStack spacing={6} align='start'>
              <Heading
                as='h2'
                size='lg'
                fontWeight='thin'
                letterSpacing='wider'
              >
                Skills
              </Heading>
              <Text>{item.skills}</Text>
            </VStack>

            <Button
              rounded='full'
              bg='blackAlpha.900'
              w={{ base: '120px', md: '230px' }}
              h={{ base: '50px', md: '60px' }}
              variant='solid'
              color='cream'
              fontSize='18px'
              className='buttonStyle'
              as={Link}
              href='https://drive.google.com/file/d/1-Bg8BDxDdNR3EDfzUoYElyV6Qwrg6T3p/view?usp=sharing'
              isExternal
            >
              My CV
            </Button>
            <VStack spacing={6} align='start'>
              <Heading
                as='h2'
                size='lg'
                fontWeight='thin'
                letterSpacing='wider'
              >
                This site
              </Heading>
              <Text>{item.thissite}</Text>
            </VStack>
            <NextLink href='/contact' passHref>
              <Button
                as={Link}
                rounded='full'
                bg='blackAlpha.900'
                w={{ base: '160px', md: '230px' }}
                h={{ base: '50px', md: '60px' }}
                variant='solid'
                color='cream'
                fontSize='18px'
                className='buttonStyle'
                mb={{ base: 5, lg: '5rem' }}
              >
                Contact me
              </Button>
            </NextLink>
          </Flex>
        ))}

        <Box
          w={{ lg: '300px' }}
          h='auto'
          display={{ base: 'none', lg: 'block' }}
          mt='2rem'
          as={motion.div}
          whileInView={{ x: [50, 100, 0], opacity: [0, 0, 1] }}
          transition={{ duration: '0.5' }}
        >
          <Image
            src='https://res.cloudinary.com/ceenobi/image/upload/f_auto,q_100/v1653075291/icons/1AE31A5C-9AE2-4A25-850F-67ACF1CF0E61_vmvcsv.jpg'
            layout='responsive'
            width='100%'
            height='100%'
            blurDataURL='URL'
            placeholder='blur'
            alt='profilepic'
          />
        </Box>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAboutMe()
  return {
    props: {
      abouts: data,
    },
  }
}
