import React from 'react'
import Tour from './Tour';

const HomeTour = () => {

    const HOME_TOUR = [
        {
          target: ".about-project",
          content: "Read this to know about project.",
          disableBeacon: true,
        },
        {
          target: ".view-graph",
          content:
            "Click to start viewing graph",
        }
      ];

  return (
    <>
        <Tour TOUR_STEPS={HOME_TOUR} />
    </>
  )
}

export default HomeTour