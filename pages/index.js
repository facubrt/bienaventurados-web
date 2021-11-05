import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
