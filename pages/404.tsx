import React from 'react'
import { Box, Flex, Container, Heading, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Box py='6rem'>
      <Container maxW='container.lg'>
        <Flex justify='center' align='center' direction='column' mt='6rem'>
          <Heading
            as='h2'
            size='xl'
            fontWeight='thin'
            letterSpacing='wider'
            mb='3rem'
            textAlign='center'
          >
            oops! - Page Not Found
          </Heading>
          <Link href='/'>
            <Button
              rounded='full'
              bg='blackAlpha.900'
              w={{ base: '220px', md: '280px' }}
              h={{ base: '50px', md: '60px' }}
              variant='ghost'
              color='#fff'
              fontSize={{ base: '20px', md: '25px' }}
              className='buttonStyle'
            >
              Go Home
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}
