import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  // withDefaultVariant,
} from '@chakra-ui/react'

import { Button } from './Button'
import { Input, Checkbox } from './Input'

const theme = extendTheme(
  {
    colors: {
      brand: {
        100: '#f7fafc',
        200: '#d7fafc',
        300: '#a7fafc',
        400: '#87fafc',
        500: '#57fafc',
        900: '#1a202c',
      },
      hero: {
        100: '#fff6f6',
        200: '#fae6e6',
        300: '#f43e3e',
        400: '#f53e3e',
        500: '#e53e3e',
        900: '#a50303',
      },
    },
    fonts: {
      heading: `Comfortaa, ${base.fonts?.heading}`,
      // heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.heading}`,
    },
    components: {
      Button,
      Input,
      Select: Input,
      Checkbox,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
    // withDefaultVariant({
    //   variant: 'filled',
    //   components: ['Input', 'NumberInput', 'PinInput', 'Select'],
    // }),
  })
)

export default theme
