import {
  extendTheme,
  theme as base,
  withDefaultColorScheme
} from '@chakra-ui/react'

// const colors = {
//     brand: {
//       900: "#A2B29F",
//       800: "#232733",
//       700: "#F9FAFE",
//     },
//   }

const theme = extendTheme({
  colors: {
    brand: {
      900: '#A2B29F',
      800: '#232733',
      700: '#F9FAFE'
    }
  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Montserrat, ${base.fonts?.body}`
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'brand.700',
        color: 'brand.800'
      }
    },
    components: {
      Link: {}
    }
    //   body: {
    //     margin: 0,
    //     padding: 0
    //   },
    //   Link: {
    //     color: '#A2B29F',
    //     textDecoration: 'none'
    //
  }
})

export default theme
