import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Flex, VStack, Text, Heading, Link } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'

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
      staggerChildren: 0.5,
      staggerDirection: -10,
    },
  },
}

const menu = [
  { name: 'WORKS', to: 'works', id: 1 },
  { name: 'ABOUT', to: 'about', id: 2 },
  { name: 'CONTACT', to: 'contact', id: 3 },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Charles Mbachu</title>
        <meta name='description' content='Welcome to my portfolio' />
      </Head>
      <Flex
        py={{ base: 8, sm: '8.2rem', md: '7rem', lg: '5rem' }}
        px={{ base: 8, md: '10rem', lg: '6rem', xl: '8rem' }}
        minH='100vh'
        gap={{ base: 6, lg: '6rem', xl: '8rem' }}
        direction={{ base: 'column', lg: 'row' }}
        bg='cream'
        align='center'
        justify={{ base: 'center', lg: 'space-between' }}
        as={motion.div}
        whileInView={{ y: [50, 150, 0], opacity: [0, 0, 1] }}
        transition={{ duration: '0.5' }}
      >
        <VStack
          spacing={4}
          align='start'
          justify='end'
          w={{ base: '83vw', md: '70vw', lg: '300px', xl: '300px' }}
          h={{ base: 'auto', lg: '400px', xl: '500px' }}
          as={motion.div}
          whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ delay: '0.5', duration: '0.5' }}
        >
          <Text fontWeight='semibold' fontSize='lg'>
            CHARLES MBACHU
          </Text>
          <Text>Frontend Developer</Text>
          <Text>
            Currently a collaborator at <br />
            <Box
              as='span'
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
            >
              Tech Studio Academy
            </Box>
          </Text>
        </VStack>
        <VStack
          spacing={8}
          align='start'
          w={{ base: '85vw', md: '70vw', lg: '55vw' }}
        >
          <AnimatePresence>
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: '100%',
              }}
              exit={{
                width: 0,
                transition: { delay: 0.4, duration: 0.3 },
              }}
            >
              <Box
                as={motion.div}
                initial='closed'
                animate='open'
                exit='closed'
                variants={sideVariants}
              >
                {menu.map(({ name, to, id }) => (
                  <NextLink key={id} href={to} passHref>
                    <Link>
                      <Heading
                        as={motion.h2}
                        whileHover={{ scale: 0.9 }}
                        variants={itemVariants}
                        fontSize={{
                          base: '2.5em',
                          sm: '4em',
                          md: '7em',
                          xl: '9em',
                        }}
                        letterSpacing='wider'
                      >
                        {name}
                      </Heading>
                    </Link>
                  </NextLink>
                ))}
              </Box>
            </motion.aside>
          </AnimatePresence>
        </VStack>
      </Flex>
    </>
  )
}

export default Home
