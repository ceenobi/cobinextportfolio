import React from 'react'
import Head from 'next/head'
import { Flex, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Navbar from './navbar'

type Props = {
  title: string
  description: string
  children?: React.ReactNode
}

export default function Layout({ title, description, children }: Props) {
  return (
    <>
      <Head>
        <title>{title ? `${title}` : 'Welcome to my Portfolio'}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <Box w='100%'>
        <header>
          <Navbar />
        </header>
        <Flex
          flex='1'
          direction='column'
          overflow='hidden'
          as={motion.div}
          whileInView={{ y: [50, 150, 0], opacity: [0, 0, 1] }}
          transition={{ duration: '0.5' }}
        >
          <main>{children}</main>
        </Flex>
      </Box>
    </>
  )
}
