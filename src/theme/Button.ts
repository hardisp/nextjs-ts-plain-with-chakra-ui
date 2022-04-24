// You can also use the more specific type for

import { ComponentStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// a single part component: ComponentSingleStyleConfig
export const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'none', // <-- border radius is same for all variants and sizes
    _focus: {
      boxShadow: 'none',
    },
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      field: {
        fontSize: 'md',
        px: 6, // <-- these values are tokens from the design system
        py: 4, // <-- these values are tokens from the design system
      },
    },
  },
  // Two variants: outline and solid
  variants: {
    primary: {
      rounded: 'none',
      bgColor: mode('brand.500', 'white'),
    },
    hardi: (props) => ({
      rounded: 'none',
      bgColor: mode('yellow.500', 'white')(props),
      color: mode('white', 'gray.900')(props),
    }),
    outline: {
      border: '2px solid',
      borderColor: 'hero.500',
      color: 'black',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
      boxShadow: 'none',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}
