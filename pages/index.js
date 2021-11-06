import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bienaventurados</title>
        <meta name="description" content="Una nueva aventura está por comenzar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Header/>
      </main>

    </div>
  )
}
