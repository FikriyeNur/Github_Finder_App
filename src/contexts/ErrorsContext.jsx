import React, { useReducer, useRef } from "react";
import ErrorsReducer from "../reducers/ErrorsReducer";

const ErrorsContext = React.createContext();

const ErrorsContextProvider = (props) => {
  const initialState = {
    error: null,
  };

  const [state, dispatch] = useReducer(ErrorsReducer, initialState);

  const errorTimerRef = useRef(null);

  const displayAlert = (message, errorType) => {
    dispatch({ type: "SET_ERROR", message, errorType });
    setErrorTimeOut();
  };

  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });

    if (errorTimerRef.current) {
      clearTimeout(errorTimerRef.current);
      errorTimerRef.current = null;
    }
  };

  const setErrorTimeOut = () => {
    if (errorTimerRef.current) {
      clearTimeout(errorTimerRef.current);
    }

    errorTimerRef.current = setTimeout(() => {
      clearError();
    }, 3000);
  };

  return (
    <ErrorsContext.Provider
      value={{ error: state.error, displayAlert, clearError }}
    >
      {props.children}
    </ErrorsContext.Provider>
  );
};

export { ErrorsContext, ErrorsContextProvider };
