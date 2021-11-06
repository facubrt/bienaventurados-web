import { Link, Container, Flex, Box, Spacer, Button } from '@chakra-ui/react'

export default function Nav() {
  return (
    <Container maxW="container.lg" py={4} px={0}>
      <Flex>
        <Box>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h2>Bienaventurados</h2>
          </Link>
        </Box>
        {/* <Spacer />
        <Box>
          <Link href="/blog">Blog</Link>
        </Box> */}
        {/* <Spacer />
        <Button colorScheme="teal" mr="4">
          Comienza tu aventura
        </Button> */}
      </Flex>
    </Container>
  )
}