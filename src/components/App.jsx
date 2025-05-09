import Navbar from "./Navbar";
import Search from "./Search";
import UserList from "./UserList";
import Alert from "./Alert";
import { UsersContextProvider } from "../contexts/UsersContext";
import { ErrorsContextProvider } from "../contexts/ErrorsContext";

const App = () => {
  return (
    <ErrorsContextProvider>
      <UsersContextProvider>
        <Navbar />
        <Search />
        <Alert />
        <UserList />
      </UsersContextProvider>
    </ErrorsContextProvider>
  );
};

export default App;
