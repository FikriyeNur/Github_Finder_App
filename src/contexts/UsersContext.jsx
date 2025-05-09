import React, { useContext, useReducer } from "react";
import UsersReducer from "../reducers/UsersReducer";
import { ErrorsContext } from "./ErrorsContext";

const UsersContext = React.createContext();

const UsersContextProvider = (props) => {
  const initialState = {
    users: [],
    loading: false,
    searched: false,
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);
  const { clearError, displayAlert, setErrorTimeOut } =
    useContext(ErrorsContext);

  const searchUsers = async (keyword) => {
    dispatch({ type: "SEARCH_USERS" });

    const token = import.meta.env.VITE_GITHUB_TOKEN;

    if (!token) {
      displayAlert(
        "GitHub API token not found. Please set it in your environment variables.",
        "danger"
      );
      dispatch({ type: "NO_USERS_FOUND", loading: false, searched: false });
      return;
    }

    try {
      const response = await fetch(
        "https://api.github.com/search/users?q=" + keyword,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorMessage =
          response.status === 403
            ? "GitHub API rate limit reached!"
            : `API Error: ${response.statusText}`;
        displayAlert(errorMessage, "danger");
        return;
      }

      const userLists = await response.json();

      if (userLists.items.length === 0) {
        noUsersFound();
        return;
      }

      const userDetails = await Promise.all(
        userLists.items.map((user) =>
          fetch("https://api.github.com/users/" + user.login, {
            headers: {
              Authorization: `token ${token}`,
            },
          }).then((res) => res.json())
        )
      );

      setTimeout(() => {
        dispatch({ type: "SET_USERS", users: userDetails });
      }, 2000);
    } catch (error) {
      displayAlert(error.message, "danger");
    }
  };

  const noUsersFound = () => {
    dispatch({ type: "NO_USERS_FOUND" });
    displayAlert("No Users Found!", "danger");
    setErrorTimeOut();
  };

  const clearResults = () => {
    dispatch({ type: "CLEAR_RESULTS" });
    clearError();
  };

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        error: state.error,
        loading: state.loading,
        searched: state.searched,
        searchUsers,
        clearResults,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersContextProvider };
