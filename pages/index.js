import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/App.module.css'
import { CountryList } from '../comps/CountryList'

export default function Home() {
  return (
    <main className={styles.App}>
      <Head>
        <title>FIFA 2022 Stickers</title>
      </Head>
      <CountryList />
    </main>
  )
}
