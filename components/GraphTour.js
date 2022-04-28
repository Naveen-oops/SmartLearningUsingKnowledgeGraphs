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
          placement: 'center',
          styles: {
            options: {
              width: 680,
            }
          }
        },
        {
          target: ".title",
          content: (<div><center>
            <h2>Interact with Neo4j Graph</h2>
            <h6>Hover over the nodes and connection to see the properties</h6>
            <img src='hoverKG.gif' height='90%' width='90%'/>
            </center></div> 
        ),
          disableBeacon: true,
          placement: 'center',
          styles: {
            options: {
              width: 680,
            }
          }
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
          placement: 'center',
          styles: {
            options: {
              width: 680,
            }
          }
        },
        {
          target: ".title",
          content: (<div><center>
            <h2>Interact with Neo4j Graph</h2>
            <h6>Click on the center node to open website of that topic</h6>
            <img src='Click.gif' height='100%' width='100%'/>
            </center></div> 
        ),
          disableBeacon: true,
          placement: 'center',
          styles: {
            tooltipContainer: {
              //width of modal
              width: 750,
              //zindex of modal
              zIndex: 1000
            },
            options: {
              width: 800,
            }
          }
        },
        {
          target: ".title",
          content: (<div><center>
            <h2>Interact with Neo4j Graph</h2>
            <h6>Click on the database node to expand next level</h6>
            <img src='expand.gif' height='100%' width='100%'/>
            </center></div> 
        ),
          disableBeacon: true,
          placement: 'center',
          styles: {
            tooltipContainer: {
              //width of modal
              width: 750,
              //zindex of modal
              zIndex: 1000
            },
            options: {
              width: 800,
            }
          }
        },
        {
          target: ".title",
          content:
            "Have a good day :) Enjoy learning !!",
            styles: {
              options: {
                width: 800,
              }
            }
        }
      ]      

  return (
    <>
        <Tour TOUR_STEPS={KG_TOUR}/>
    </>
  )
}

export default GraphTour