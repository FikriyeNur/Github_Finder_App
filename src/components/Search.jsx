import { useContext, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { ErrorsContext } from "../contexts/ErrorsContext";

const Search = () => {
  const { searchUsers, clearResults, searched } = useContext(UsersContext);
  const { displayAlert } = useContext(ErrorsContext);

  const [keyword, setKeyword] = useState("");

  const inputChange = (e) => {
    setKeyword(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (keyword.trim().length === 0) {
      displayAlert("Please enter a keyword!", "danger");
    } else {
      clearResults();
      searchUsers(keyword);
      setKeyword("");
    }
  };

  return (
    <div className="container my-3 d-flex justify-content-center">
      <form onSubmit={formSubmit} className="w-50">
        <div className="d-flex w-100">
          <div className="input-group flex-grow-1">
            <input
              type="text"
              className="form-control border-primary border-2 shadow-lg rounded-start"
              value={keyword}
              placeholder="Please enter keyword..."
              onChange={inputChange}
              style={{ minWidth: 0 }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary border-2 shadow-lg rounded-end"
                type="submit"
                style={{ width: "auto", whiteSpace: "nowrap" }}
              >
                Search
              </button>
            </div>
            {searched && (
              <div className="input-group-append ms-3">
                <button
                  className="btn btn-outline-danger border-2 shadow-lg"
                  type="button"
                  onClick={clearResults}
                  style={{ width: "auto", whiteSpace: "nowrap" }}
                >
                  Clear Results
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
