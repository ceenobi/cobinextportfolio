import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '360px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme(
  {
    fonts: {
      heading: `'Noblesville', sans-serif`,
      body: `'Neue Reman Sans', sans-serif`,
    },
    colors: {
      deepBlue: '#253069',
      cream: '#eee7e1',
      lightBlack: '#1a1919',
    },

    p: {
      letterSpacing: '0.08em',
    },
    styles: {
      global: () => ({
        a: {
          textDecoration: 'none !important',
          _hover: {
            color: 'red.400',
            transition: 'all 0.5s ease',
          },
        },
        '.navbar-active': {
          visibility: {
            base: 'hidden',
            md: 'visible',
          },
        },
        '::-webkit-scrollbar': {
          width: '1px',
        },
        '.write': {
          writingMode: {
            base: 'horizontal-tb',
            lg: 'vertical-lr',
          },
          display: 'inline-block',
        },
        '.buttonStyle': {
          _hover: {
            base: 'none',
            md: {
              w: '300px',
              transition: '0.3s ease-in',
            },
          },
        },
        '.contact': {
          textDecoration: 'underline',
          _hover: {
            textDecoration: 'none',
          },
        },
      }),
    },
  },
  { breakpoints }
)
export default theme
