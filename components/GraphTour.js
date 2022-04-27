import React from 'react'
import Tour from './Tour'

const GraphTour = () => {

    const KG_TOUR =[

        {
          target: ".title",
          content: (<div><center>
            <h2>Interact with Neo4j Graph</h2>
            <h6>Scroll/Pinch to zoom the graph</h6>
            <img src='zoom.gif' height='100%' width='100%'/>
            </center></div> 
        ),
          disableBeacon: true,
        },
        {
          target: ".title",
          content: (<div><center>
            <h2>Interact with Neo4j Graph</h2>
            <h6>Hover over the nodes and connection to see the properties</h6>
            <img src='hoverKG.gif' height='100%' width='100%'/>
            </center></div> 
        ),
          disableBeacon: true,
        },
        {
          target: ".title",
          content: (<div><center>
            <h2>Interact with Neo4j Graph</h2>
            <h6>Click and Drag the nodes to move it around</h6>
            <img src='dragKG.gif' height='100%' width='100%'/>
            </center></div> 
        ),
          disableBeacon: true,
        },
        {
          target: ".title1",
          content:
            "Interact with MongoDB Graph",
        },
        // {
        //   target: GraphFrontEnd.graphFrontEnd,
        //   content:
        //     "Interact with MongoDB Graph",
        // }
      
      ]      

  return (
    <>
        <Tour TOUR_STEPS={KG_TOUR}/>
    </>
  )
}

export default GraphTour