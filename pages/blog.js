import HeaderBlog from "../components/HeaderBlog"

import { getAllFilesMetadata} from '../lib/mdx'

import Post from '../components/Post'
import HeroPost from '../components/HeroPost'

export default function Blog({ allPosts }) {
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <>
            <HeaderBlog/>
            <section className="container d-flex">
                {heroPost && (
                    <HeroPost post={heroPost}/>
                    )}
            </section>
            <section className="container d-flex mt-5 mb-2">
                <h4>Notas recientes</h4>
            </section>
            <section className="container d-flex my-4">
                {morePosts.length > 0 && (
                <div className='posts'>
                {morePosts.map((post, index) => (
                    <Post post={post}/>
                ))}
                </div>
                // <Post posts={morePosts} />
                )}
            </section>
        </>
        
    )
}

export async function getStaticProps() {
  
    const allPosts = await getAllFilesMetadata()
  
    return {
      props: {allPosts},
    }
  }