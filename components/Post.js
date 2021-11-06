import { Link, Image, Box } from '@chakra-ui/react'

export default function Post({ post }) {
  return (
    <Box>
      <Link key={post.slug} href={`/blog/${post.slug}`}>
        <a>
            <Image src={post.imagen} alt=''/>
            {/* <div className='post-date'>{post.fecha}</div> */}
            <h3 className="mt-4 mb-2">{post.titulo}</h3>
            {/* <p className="small">{post.descripcion}</p> */}
        </a>
      </Link>
    </Box>
  )
}