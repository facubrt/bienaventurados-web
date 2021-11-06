import { Container, Flex, VStack, Image, Link} from '@chakra-ui/react'

export default function Header() {
    return (
      <Container maxW="container.lg" p={0}>
        <Flex h="100vh" py={5}>
          <VStack w="full" h="full" px={20} spacing={10} alignItems="flex-start">
            <h1 className="display-4 fw-bold mb-4">Una nueva aventura está por comenzar</h1>
            <p className="lead mb-4">Hacé volar palabras de amor y llevá la fe a todas partes</p>
            <Link href="https://play.google.com/store/apps/details?id=com.sereucaristia" target="_blank" rel="noreferrer">
              <Image w="8rem" src="images/google-play-badge.svg"/>
            </Link>
          </VStack>
          <Image src="images/img-app.svg"/>
        </Flex>
    </Container>
        
  )
}