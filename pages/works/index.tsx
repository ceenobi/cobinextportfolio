import React from 'react'
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'
import { Work } from '../../types'
import { fetchWorks } from '../../lib/loadData'

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -10,
    },
  },
}

interface IProps {
  works: Work[]
}

export default function Works({ works }: IProps) {
  return (
    <>
      <Head>
        <title>My projects</title>
        <meta name='description' content='some of my works' />
      </Head>
      <Flex
        py={{ base: 16, sm: '8rem', md: '1rem' }}
        px={{ base: 8, md: '10rem' }}
        minH='100vh'
        gap={{ base: 6, lg: '8rem' }}
        direction={{ base: 'column', lg: 'row' }}
        bg='lightBlack'
        align='center'
        justify={{ base: 'center', lg: 'space-between' }}
      >
        <Flex
          direction='column'
          gap={4}
          align='start'
          w={{ base: '83vw', md: '70vw', lg: '35vw', xl: '25vw' }}
          color='cream'
          h={{ base: 'auto', md: '300px', lg: '500px' }}
          fontSize='sm'
          justify={{ base: 'center', lg: 'end' }}
          as={motion.div}
          whileInView={{ x: [50, 150, 0], opacity: [0, 0, 1] }}
          transition={{ delay: '0.2', duration: '0.2' }}
        >
          <Text fontWeight='semibold'>WORKS</Text>
          <Text>
            This is a showcase of some of my works detailing my journey in the
            world of programming.{' '}
          </Text>
          <Text>
            Frontend web development is growing everyday and my aim is to keep
            pace, learning and improving everyday.
          </Text>
        </Flex>
        <Flex
          direction='column'
          gap={4}
          align='end'
          w={{ base: '83vw', md: '70vw', lg: '50vw' }}
          overflow={{ base: 'none', lg: 'auto' }}
          h={{ base: 'auto', lg: '90vh' }}
        >
          <AnimatePresence>
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: '100%',
              }}
              exit={{
                width: 0,
                transition: { delay: 0.2, duration: 0.2 },
              }}
            >
              <Box
                as={motion.div}
                initial='closed'
                animate='open'
                exit='closed'
                variants={sideVariants}
              >
                {works.map((item) => (
                  <Box key={item._id} mb={3}>
                    <NextLink href={`/works/${item.slug}`} passHref>
                      <Link>
                        <Box color='cream'>
                          <Heading
                            as={motion.h2}
                            whileHover={{ scale: 0.95 }}
                            variants={itemVariants}
                            fontSize={{
                              base: '2em',
                              md: '3em',
                              xl: '4em',
                            }}
                            letterSpacing='wider'
                            mb={0}
                          >
                            {item.title}
                          </Heading>
                          <Text fontSize='sm'>-{item.project}</Text>
                        </Box>
                      </Link>
                    </NextLink>
                  </Box>
                ))}
              </Box>
            </motion.aside>
          </AnimatePresence>
        </Flex>
      </Flex>
    </>
  )
}

export async function getStaticProps() {
  const data = await fetchWorks()
  return {
    props: {
      works: data,
    },
  }
}
