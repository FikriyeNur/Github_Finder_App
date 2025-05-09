const UsersReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return {
        ...state,
        loading: true,
        searched: true,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
        loading: false,
        searched: true,
      };
    case "CLEAR_RESULTS":
      return {
        ...state,
        users: [],
        loading: false,
        searched: false,
      };
    case "NO_USERS_FOUND":
      return {
        ...state,
        loading: false,
        searched: false,
      };
    default:
      return state;
  }
};

export default UsersReducer;
