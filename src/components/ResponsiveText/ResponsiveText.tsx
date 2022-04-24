import { Box } from '@chakra-ui/react'

export default function ResponsiveText() {
  return (
    <>
      <Box
        display={{
          xl: 'block',
          base: 'none',
        }}
      >
        This XL
      </Box>
      <Box
        display={{
          xl: 'none',
          lg: 'block',
          base: 'none',
        }}
      >
        This LG
      </Box>
      <Box
        display={{
          lg: 'none',
          md: 'block',
          base: 'none',
        }}
      >
        This MD
      </Box>
      <Box
        display={{
          md: 'none',
          sm: 'block',
          base: 'none',
        }}
      >
        This SM
      </Box>
      <Box
        display={{
          sm: 'none',
          base: 'block',
        }}
      >
        This BASE
      </Box>
    </>
  )
}
