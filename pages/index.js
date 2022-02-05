import Head from 'next/head'
import GraphFrontEnd from './components/graphfrontend'
export default function Home() {
  return ( 
  <div>
    <Head>
      <title> WebDev Newz</title>
      <meta name='keywords' content='web
      development, programming'/>
    </Head>
    <GraphFrontEnd />
  </div>
  )
}
