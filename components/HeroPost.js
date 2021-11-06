import Link from 'next/link'
import { Flex, Box, Image} from './elements'

export default function Post({ post }) {
  return (
      <Flex>
        <Box>
          <Link href={`/blog/${post.slug}`}>
            <a>
              <h2 className="hero">{post.titulo}</h2>
              <p className="hero">{post.descripcion}</p>
            </a>
          </Link>
        </Box>
        <Box boxSize="600px">
          <Image className="img-fluid post-hero" src={post.imagen} alt=''/>
        </Box>
      </Flex>
  )
}