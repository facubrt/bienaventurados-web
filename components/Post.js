import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <Link key={post.slug} href={`/blog/${post.slug}`}>
        <a>
            <img className="post" src={post.imagen} alt=''/>
            {/* <div className='post-date'>{post.fecha}</div> */}
            <h3 className="mt-4 mb-2">{post.titulo}</h3>
            <p>{post.descripcion}</p>
        </a>
      </Link>
    </div>
  )
}