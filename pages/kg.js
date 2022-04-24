import Head from 'next/head'
import GraphFrontEnd from './components/graphfrontend'
import GraphFrontEnd2 from './components/graphfrontend2'
import Tour from '../components/Tour'

export default function Home() {

  return ( 
  <div>
    <Head>
      <title> Smart learning using Knowledge graphs</title>
      <meta name='keywords' content='web development, programming'/>
    </Head>
    <center> <Tour/> </center>
    
    <GraphFrontEnd title = "Neo4j" />
    <GraphFrontEnd2 title = "MongoDB"/>
  </div>
  )
}
