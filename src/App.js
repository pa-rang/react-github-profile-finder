import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import { getUserAPI } from "./lib/api";

function App() {
  const [user, setUser] = React.useState(null);

  const getUser = async (username) => {
    const data = await getUserAPI(username);

    setUser(data);
  };

  React.useEffect(() => {
    getUser("pa-rang");
  }, []);

  console.log("user", user);

  return (
    <>
      <SearchInput />
      <SearchResult user={user} />
    </>
  );
}

export default App;
