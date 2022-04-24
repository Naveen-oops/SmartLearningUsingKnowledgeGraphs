import React from 'react'
import Tour from './Tour'

const GraphTour = () => {

    const KG_TOUR =[

        {
          target: ".title",
          content: "Interact with Neo4j Graph",
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