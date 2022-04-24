import type { NextPage } from 'next'
import {
  Box,
  Button,
  Checkbox,
  Container,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react'
import { ResponsiveHeading } from '@components/ResponsiveHeading'
import { ResponsiveBox } from '@components/ResponsiveBox'
import ResponsiveText from '@components/ResponsiveText/ResponsiveText'

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Container maxW="container.lg" px="20" py="6">
      <Heading as="h1">Plain Layout Home Page</Heading>
      <Box>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        provident a cumque ex! Quo, sit cum id ullam minus, nulla perferendis
        possimus aperiam, voluptatem molestiae sapiente deleniti error iure
        similique.
      </Box>

      <pre>This responsive example</pre>
      <VStack justify={'center'} mt="10">
        <ResponsiveHeading />
        <Box w={'full'} />
        <ResponsiveBox />
        <Box w={'full'} />
        <ResponsiveText />
        <Box w={'full'} />
        <HStack w="full">
          <Input name="input" />{' '}
          <Select>
            <option>Hero</option>
            <option>Hero 2</option>
            <option>Hero 3</option>
          </Select>
        </HStack>
        <HStack w="full">
          <Checkbox /> <Text>I agree with you</Text>
        </HStack>

        <Button variant={'hardi'} onClick={toggleColorMode}>
          Example
        </Button>
      </VStack>
    </Container>
  )
}

export default Home
