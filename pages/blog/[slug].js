import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from "../../lib/mdx"
import MDXComponents from '../../components/MDXComponents'


export default function Post({ source, frontmatter }) {
    return (
        <div>
        <img className="img-hero" src={frontmatter.imagen}/>
        <div className="container-blog"> 
            <h1 className="post mt-5">{frontmatter.titulo}</h1>
            <h2 className="post mt-2">{frontmatter.subtitulo}</h2>
            <div className="d-flex g-0 h-100">
                <p className="small fw-bolder me-4">{frontmatter.autor}</p>
                <p className=" small text-muted">{frontmatter.fecha}</p>
            </div>
            <MDXRemote {...source} components={MDXComponents}/>
        </div>
        </div>
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