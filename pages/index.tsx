import type { NextPage } from 'next'
import { Box, Container, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container>
      <Heading as="h1">Plain Layout Home Page</Heading>
      <Box>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        provident a cumque ex! Quo, sit cum id ullam minus, nulla perferendis
        possimus aperiam, voluptatem molestiae sapiente deleniti error iure
        similique.
      </Box>
    </Container>
  )
}

export default Home
