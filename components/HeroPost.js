import Link from 'next/link'

export default function Post({ post }) {
  return (
            // <!-- HERO -->
    <section id="hero" class="d-flex h-100">
      <div class="row g-0 w-100">
        <div class="col-lg-6 d-flex">
          <div class="content align-self-center me-5">
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a>
                <h2 className="hero">{post.titulo}</h2>
                <p className="hero">{post.descripcion}</p>
              </a>
            </Link>
          </div>
        </div>
        <div class="col-lg-6 d-flex">
          <div class="content align-self-center">
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a>
                <img className="img-fluid post-hero" src={post.imagen} alt=''/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
    // <div className="row">
    //   <Link key={post.slug} href={`/blog/${post.slug}`}>
    //     <a>
    //       <div className="col-6 d-flex">
    //         <h2>{post.titulo}</h2>
    //         <p>{post.descripcion}</p>
    //         <img src={post.imagen} alt=''/>
    //       </div>
    //       <div className="col-6 d-flex">
    //         {/* <div className='post-date'>{post.fecha}</div> */}
    //       </div>
    //     </a>
    //   </Link>
    // </div>
  )
}