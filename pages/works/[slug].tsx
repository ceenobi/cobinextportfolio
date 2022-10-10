import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
  Button,
} from '@chakra-ui/react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GoLinkExternal } from 'react-icons/go'
import { Work } from '../../types'
import { loadWorks, loadWorksDetails } from '../../lib/loadData'

interface IProps {
  detail: Work[]
}

interface IParams extends ParsedUrlQuery {
  slug: string
}

export default function WorkDetails({ detail }: IProps) {
  const textStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  }
  return (
    <>
      {detail?.map((item) => (
        <Box key={item._id}>
          <Head>
            <title>{item.title} project review</title>
            <meta name='description' content='project detail' />
          </Head>

          <Flex
            direction='column'
            py={{ base: 14, sm: '4rem', md: '0rem' }}
            px={{ base: 4, md: '5rem', lg: '10rem' }}
            minH='100vh'
            bg='cream'
            gap={10}
          >
            <Flex
              h={{ base: '50vh', sm: '70vh', md: '90vh' }}
              w='full'
              justify='center'
              align='center'
              bg='lightBlack'
              mb='5rem'
            >
              <Heading
                fontSize={{
                  base: '2.5em',
                  sm: '3.5em',
                  md: '7em',
                  lg: '6em',
                  xl: '9.5em',
                }}
                color='cream'
                as={motion.h2}
                whileInView={{ y: [100, 0, 50], opacity: [0, 0, 1] }}
                transition={{ duration: '0.3' }}
                textAlign='center'
              >
                {item.title}
              </Heading>
            </Flex>
            <Box
              maxW='container.md'
              mx='auto'
              as={motion.div}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: '0.5' }}
            >
              <Heading
                as='h2'
                size='xl'
                px={6}
                fontWeight='thin'
                letterSpacing='wider'
                mb='3rem'
                textAlign='center'
              >
                {item.headline}
              </Heading>
              <Flex
                flexWrap='wrap'
                justify='space-between'
                gap={4}
                mb={8}
                px={8}
                as={motion.div}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: '0.5' }}
              >
                <VStack
                  spacing={2}
                  w={{ base: 'full', md: '300px', lg: '200px' }}
                  align='start'
                >
                  <Text sx={textStyle}>ROLE</Text>
                  <Text fontSize={{ base: 'null', lg: 'sm' }} lineHeight='tall'>
                    {item.role[0]}
                  </Text>
                  <Text fontSize={{ base: 'null', lg: 'sm' }} lineHeight='tall'>
                    {item.role[1]}
                  </Text>
                  <Text fontSize={{ base: 'null', lg: 'sm' }} lineHeight='tall'>
                    {item.role[2]}
                  </Text>
                </VStack>
                <VStack
                  spacing={2}
                  w={{ base: 'full', md: '300px', lg: '200px' }}
                  align='start'
                >
                  <Text sx={textStyle}>RESPONSIBILITIES</Text>
                  <Text fontSize={{ base: 'null', lg: 'sm' }} lineHeight='tall'>
                    {item.responsibilities}
                  </Text>
                </VStack>
                <VStack
                  spacing={2}
                  w={{ base: 'full', md: '300px', lg: '200px' }}
                  align='start'
                >
                  <Text sx={textStyle}>URL</Text>
                  <HStack spacing='2px'>
                    <Link
                      href={item.projectLink}
                      isExternal
                      fontSize={{ base: 'null', lg: 'sm' }}
                    >
                      {' '}
                      {item.title}
                      <Icon as={GoLinkExternal} boxSize='16px' />
                    </Link>
                  </HStack>
                  <HStack spacing='2px'>
                    <Link
                      href={item.codeLink}
                      isExternal
                      fontSize={{ base: 'null', lg: 'sm' }}
                    >
                      View code
                      <Icon as={GoLinkExternal} boxSize='16px' />
                    </Link>
                  </HStack>
                </VStack>
              </Flex>
              <Text fontSize={{ base: 'null', lg: 'sm' }} px={8}>
                <Box as='span' sx={textStyle} mr='2px'>
                  STACK:
                </Box>
                <Box as='span'>&nbsp;{item.tags.join(' , ')}</Box>
              </Text>
            </Box>
            <VStack
              spacing='6rem'
              align='center'
              mb='5rem'
              as={motion.div}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: '0.3' }}
            >
              <Box
                w='full'
                h='full'
                mt='5rem'
                as={motion.div}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: '0.5' }}
              >
                <Image
                  src={item?.cloudinaryList[0]?.secure_url}
                  layout='responsive'
                  width='100%'
                  height='60%'
                  objectFit='contain'
                  alt='mockimg'
                  blurDataURL='URL'
                  placeholder='blur'
                />
              </Box>
              <Text
                w={{ base: '90%', md: '500px', lg: '600px' }}
                lineHeight='tall'
                fontSize={{ base: 'md', lg: 'lg' }}
                // as={motion.p}
                // whileInView={{ opacity: [0, 1] }}
                // transition={{ duration: '0.5' }}
              >
                {item.description}
              </Text>
              <Box
                boxSize='70%'
                as={motion.div}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: '0.5' }}
              >
                <Image
                  src={item?.cloudinaryList[1]?.secure_url}
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='mockup'
                  blurDataURL='URL'
                  placeholder='blur'
                />
              </Box>
              <Text
                w={{ base: '90%', md: '500px', lg: '600px' }}
                lineHeight='tall'
                // as={motion.p}
                // whileInView={{ opacity: [0, 1] }}
                // transition={{ duration: '0.5' }}
                fontSize={{ base: 'md', lg: 'lg' }}
              >
                {item.descriptionB}
              </Text>
              <Box
                boxSize='100%'
                as={motion.div}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: '0.5' }}
              >
                <Image
                  src={item?.cloudinaryList[2]?.secure_url}
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='mockup'
                  blurDataURL='URL'
                  placeholder='blur'
                />
              </Box>
              <Text
                w={{ base: '90%', md: '500px', lg: '600px' }}
                lineHeight='tall'
                // as={motion.p}
                // whileInView={{ opacity: [0, 1] }}
                // transition={{ duration: '0.5' }}
                fontSize={{ base: 'md', lg: 'lg' }}
              >
                {item.descriptionC}
              </Text>
              <Box
                boxSize='100%'
                as={motion.div}
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: '0.5' }}
              >
                <Image
                  src={item?.cloudinaryList[3]?.secure_url}
                  width='100%'
                  height='60%'
                  layout='responsive'
                  objectFit='contain'
                  alt='mockup'
                  blurDataURL='URL'
                  placeholder='blur'
                />
              </Box>
            </VStack>
            <Box
              my={{ base: 5, lg: '5rem' }}
              px={4}
              mx='auto'
              as={motion.div}
              whileInView={{ y: [50, 150, 0], opacity: [0, 0, 1] }}
              transition={{ delay: '0.2', duration: '0.2' }}
            >
              <Heading
                as='h2'
                size='xl'
                fontWeight='thin'
                letterSpacing='wider'
                mb='3rem'
                textAlign='center'
              >
                Check it out.
              </Heading>
              <Link href={item.projectLink} isExternal>
                <Button
                  rounded='full'
                  bg='blackAlpha.900'
                  w={{ base: '220px', md: '280px' }}
                  h={{ base: '50px', md: '60px' }}
                  variant='ghost'
                  color='cream'
                  fontSize={{ base: '16px', md: '18px' }}
                  className='buttonStyle'
                >
                  {item.projectLink.slice(0, 19)}
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await loadWorks()
  const dataList = data
  const paths = dataList.map((slug: any) => {
    return {
      params: { slug: slug.slug },
    }
  })
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const data = await loadWorksDetails(slug)
  return {
    props: {
      detail: data,
    },
  }
}
