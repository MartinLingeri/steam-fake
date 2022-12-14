import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  fonts: {
    body: `'Arial', 'Helvetica', sans-serif`,
  },
  colors: {
    primary: {
      50: '#54a5d4',
      100: '#67c1f5',
      200: 'linear-gradient( -60deg, rgba(226,244,255,0.3) 5%,rgba(84, 107, 115, 0.3) 95%)',
      600: '#1A2938',
      800: '#0E161E',
    },
    nav: '#171a21',
    text: '#dbe2e6',
    textBlue: '#54a5d4',
    textGray: '#8f98a0',
    textDarkGray: '#556772',
    textPurchaseButton: '#d2efa9',
    textPurchasePrice: '#c6d4df',
    storeNav: {
      font: 'Arial',
      textShadow: '0px 2px 3px rgb(0 0 0 / 30%)',
      hover: '#54a5d4',
      bg: 'linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)',
      shadow: '0 0 3px rgb(0 0 0 / 40%)',
      inputBg: '#316282',
    },
    title: {
      font: 'Motiva Sans',
      buttonBg: 'rgba( 103, 193, 245, 0.2 )',
    },
    lightHover: '#54a5d4',
  },
})

export default theme
