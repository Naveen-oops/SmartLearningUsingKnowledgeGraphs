import Head from 'next/head'
import GraphFrontEnd from './components/graphfrontend'
import GraphFrontEnd2 from './components/graphfrontend2'
export default function Home() {
  return ( 
  <div>
    <Head>
      <title> Smart learning using Knowledge graphs</title>
      <meta name='keywords' content='web
      development, programming'/>
    </Head>
    <GraphFrontEnd />
    <GraphFrontEnd2/>
  </div>
  )
}
