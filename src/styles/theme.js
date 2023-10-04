import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

/* diferente da documentação do ChakraUi, pois, importo o colors e não crio ele localmente. */
export const theme = extendTheme({
  colors: {
    brand: colors
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Inter',
        padding: 0,
        margin: 0,
        backgroundColor: colors.background
      }
    }
  }
})
