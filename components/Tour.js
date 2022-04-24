import React, { useReducer, useEffect } from "react";
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import GraphFrontEnd from "../pages/components/graphfrontend";
const TOUR_STEPS = [
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
console.log(GraphFrontEnd.graphFrontEnd)
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

const INITIAL_STATE = {
  key: new Date(),
  run: false,
  continuous: true,
  loading: false,
  stepIndex: 0,
  steps: KG_TOUR,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "START":
      return { ...state, run: true };
    case "RESET":
      return { ...state, stepIndex: 0 };
    case "STOP":
      return { ...state, run: false };
    case "NEXT_OR_PREV":
      return { ...state, ...action.payload };
    case "RESTART":
      return {
        ...state,
        stepIndex: 0,
        run: true,
        loading: false,
        key: new Date(),
      };
    default:
      return state;
  }
};

const Tour = () => {
  const [tourState, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    if (!localStorage.getItem("tour")) {
      dispatch({ type: "STOP" });
    }
  }, []);

  const callback = (data) => {
    const { action, index, type, status } = data;

    if (
      action === ACTIONS.CLOSE ||
      (status === STATUS.SKIPPED && tourState.run) ||
      status === STATUS.FINISHED
    ) {
      dispatch({ type: "STOP" });
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      dispatch({
        type: "NEXT_OR_PREV",
        payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) },
      });
    }
  };

  const startTour = () => {
    dispatch({ type: "RESTART" });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={startTour}>
        Start Tour
      </button>

      <JoyRide
        {...tourState}
        callback={callback}
        showSkipButton={true}
        styles={{
          tooltipContainer: {
            textAlign: "left",
          },
          
          buttonBack: {
            marginRight: 10,
          },
        }}
        locale={{
          last: "End tour",
        }}
      />
    </>
  );
};

export default Tour;
