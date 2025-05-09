import { useContext } from "react";
import User from "./User";
import Loading from "./Loading";
import { UsersContext } from "../contexts/UsersContext";

const UserList = () => {
  const { users, loading } = useContext(UsersContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="row">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
