import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { usePageLoading } from '../hooks/usePageLoading'
import Spinner from '../hooks/useSpinner'
import theme from '../styles/customTheme'
import Layout from '../components/layout'


function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState<boolean>(true)
  const { isPageLoading } = usePageLoading()
  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout title={''} description={''}>
          {isPageLoading ? <Spinner /> : <Component {...pageProps} />}
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
