import HeaderBlog from "../components/HeaderBlog"

import { getAllFilesMetadata} from '../lib/mdx'

import Post from '../components/Post'
import HeroPost from '../components/HeroPost'
import { Box, Grid, Container, Flex } from '@chakra-ui/react'

export default function Blog({ allPosts }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <Container maxW="container.lg">
            <HeaderBlog/>
            <Box>
                {heroPost && (
                    <HeroPost key="heroPost.slug" post={heroPost}/>
                )}
            </Box>
            <Box py={5}>
                <h2>Notas recientes</h2>
            </Box>
            <Box>
                {morePosts.length > 0 && (
                    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                        <Box>
                            {morePosts.map((post, index) => (
                                <Post key="post.slug" post={post}/>
                            ))}
                        </Box>
                    </Grid>
                )}
            </Box>
        </Container>
        
    )
}

export async function getStaticProps() {
  
    const allPosts = getAllFilesMetadata()
  
    return {
      props: {allPosts},
    }
  }