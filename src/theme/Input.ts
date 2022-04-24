// You can also use the more specific type for

import { ComponentStyleConfig } from '@chakra-ui/react'

// a single part component: ComponentSingleStyleConfig
export const Input: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    control: {
      bgColor: 'white',
      borderColor: 'gray.100',
      boxShadow: 'none',
      borderRadius: 'none', // <-- border radius is same for all variants and sizes
      _focus: {
        boxShadow: 'none',
        borderColor: 'hero.500',
      },
      _hover: {
        bgColor: 'white',
      },
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
        fontSize: 'xl',
      },
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '1px solid',
      borderColor: 'hero.500',
    },
    filled: {
      // Each components has different name for this. Please check!!!
      field: {
        bgColor: 'white',
        borderColor: 'gray.100',
        // color: 'inherit',
        boxShadow: 'none',
        borderRadius: 'none', // <-- border radius is same for all variants and sizes
        _focus: {
          boxShadow: 'none',
          borderColor: 'hero.500',
        },
        _hover: {
          bgColor: 'white',
        },
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'filled',
    // _focus: {
    //   boxShadow: 'none',
    // },
  },
}
export const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    control: {
      borderRadius: 'none',
      borderColor: 'brand.500',
      _focus: {
        // ring: 2,
        // ringColor: 'brand.500',
        boxShadow: 'none',
        borderColor: 'none',
      },
    },
  },
}
