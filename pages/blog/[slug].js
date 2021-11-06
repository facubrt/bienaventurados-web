import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from "../../lib/mdx"
import MDXComponents from '../../components/MDXComponents'
import { Image, Box, Flex, VStack, HStack } from '@chakra-ui/react'


export default function Post({ source, frontmatter }) {
    return (
        <Box>
            <Box>
                <Image alt="" className="img-hero" src={frontmatter.imagen}/>
            </Box>
        <Box className="container-blog">
            <VStack alignItems="flex-start">
                <h1 className="post mt-5">{frontmatter.titulo}</h1>
                <h2 className="post mt-2">{frontmatter.subtitulo}</h2>
                <HStack alignItems="flex-start" py={5}>
                    <p className="small fw-bolder me-4">{frontmatter.autor}</p>
                    <p className=" small text-muted">{frontmatter.fecha}</p>
                </HStack>
            </VStack> 
            <Box py={10}>
            <MDXRemote {...source} components={MDXComponents}/>
            </Box>
        </Box>
        </Box>
    )
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug)

    return {
        props: { source, frontmatter}
    }
}

export async function getStaticPaths () {
    const posts = getFiles()
    const paths = posts.map((post) => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}