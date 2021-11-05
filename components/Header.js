export default function Header() {
    return (
        // <div className="container mb-5 mt-5 h-100 w-100">
        //     <h1>
        //         Una nueva aventura está por comenzar
        //     </h1>
        //     <h4 className="descripcion my-5">La santidad está al alcance de un paso, ¿lo darás?</h4>
        // </div>
        <section id="hero" className="d-flex h-100">
        <div className="container row g-0 w-100 my-5">
          <div className="col-lg-6 d-flex">
            <div className="content align-self-center">
              <h1 className="display-4 fw-bold mb-4">Una nueva aventura está por comenzar
              </h1>
              <p className="lead mb-4">Hacé volar palabras de amor y llevá la fe a todas partes</p>
                  <div>
                  <a href="https://play.google.com/store/apps/details?id=com.sereucaristia" target="_blank">
                  <img src="images/google-play-badge.svg" className="img-fluid w-25"/>

                  </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end">
            <div>
              <img src="images/img-app.svg" className="img-fluid w-100"/>
            </div>
          </div>
        </div>
      </section>
        
    )
}