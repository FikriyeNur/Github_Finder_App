import { useContext } from "react";
import { ErrorsContext } from "../contexts/ErrorsContext";

const Alert = () => {
  const { error } = useContext(ErrorsContext);

  return (
    error && (
      <div className="container">
        <div className={`alert alert-${error?.errorType || "danger"} mt-3`}>
          <i className="bi bi-exclamation-triangle"></i> {error.message}
        </div>
      </div>
    )
  );
};

export default Alert;
