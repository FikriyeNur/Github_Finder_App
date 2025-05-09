const ErrorsReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        error: { message: action.message, errorType: action.errorType },
      };
    case "CLEAR_ERROR":
      return {
        error: null,
      };
    default:
      return state || { error: null };
  }
};

export default ErrorsReducer;
