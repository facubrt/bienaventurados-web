import Nav from '../components/Nav'
import Header from '../components/Header'
import '../styles/globals.css'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      </Head>
      <Nav/>
      <Component {...pageProps} />
      <footer className="bg-dark">
        <Footer/>
      </footer>
    </>
  )
}

export default MyApp
