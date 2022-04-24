import { Box, Heading } from '@chakra-ui/react'

export default function ResponsiveHeading() {
  return (
    <Box color={'hero.900'}>
      <Box display={['none', 'none', 'none', 'none', 'block']}>
        <Heading as={'h3'}>XL Size</Heading>
      </Box>
      <Box display={['none', 'none', 'none', 'block', 'none']}>
        <Heading as={'h3'}>LG</Heading>
      </Box>
      <Box display={['none', 'none', 'block', 'none', 'none']}>
        <Heading as={'h3'}>MD</Heading>
      </Box>
      <Box display={['none', 'block', 'none', 'none', 'none']}>
        <Heading as={'h3'}>SM</Heading>
      </Box>
      <Box display={['block', 'none', 'none', 'none', 'none']}>
        <Heading as={'h3'}>BASE</Heading>
      </Box>
    </Box>
  )
}
