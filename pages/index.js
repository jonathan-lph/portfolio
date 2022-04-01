import Head from 'next/head'
import { Jumbotron, About, Projects, Courseworks } from '@src/components/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonathan Lam</title>
      </Head>

      <div>
        <Jumbotron/>
        <About/>
        <Projects showing={3}/>
        <Courseworks/>
      </div>

    </div>
  )
}
