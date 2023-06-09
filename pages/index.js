/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import MainPage from '@/public/components/MainPage'

export default function Home() {
  return (
    <section>
      <Head>
        <title>TapCash</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </section>
  )
}
