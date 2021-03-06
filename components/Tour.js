import React, { useReducer, useEffect } from "react";
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";

const Tour = ({TOUR_STEPS}) => {

  const INITIAL_STATE = {
    key: new Date(),
    run: false,
    continuous: true,
    loading: false,
    stepIndex: 0,
    steps: TOUR_STEPS,
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
            textAlign: "center",
            // modal arrow and background color
            alignContent: "center",
            arrowColor: "#eee",
            backgroundColor: "#eee",
            // page overlay color
            overlayColor: "rgba(79, 26, 0, 0.4)",
            //button color
            primaryColor: "mediumaquamarine",
            //text color
            textColor: "#333",
            //width of modal
            width: 650,
            //zindex of modal
            zIndex: 1000
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
