import { Box } from '@chakra-ui/react'

export default function ResponsiveBox() {
  return (
    <Box
      h={['50px', '100px', '200px']}
      maxW={'container.sm'}
      w={['50px', '100px', '200px']}
      bgColor="blue.200"
    />
  )
}
