import Head from 'next/head'
import { Header, Main } from '@/components'


export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Electric Cars, Solar & Clean Energy | Tesla United Kingdom
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <Header />
        <Main />
      </div>
    </div>
  )
}
