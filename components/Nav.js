
export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light w-100 sticky-top">
          <div class="container">
            <a class="navbar-brand fw-bold" href="/">Bienaventurados</a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <i class="fas fa-bars lead text-dark"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                {/* <li class="nav-item d-flex">
                  <a class="nav-link align-self-center text-dark" href="/app">Aplicación</a>
                </li> */}
                <li class="nav-item d-flex">
                  <a class="nav-link align-self-center text-dark" href="/blog">Blog</a>
                </li>
                {/* <li class="nav-item d-flex">
                  <a class="nav-link align-self-center text-dark" href="/acerca-de">Acerca de</a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
    )
}