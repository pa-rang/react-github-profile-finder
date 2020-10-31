import React from "react";
import "./App.scss";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import { getUserAPI } from "./lib/api";

function App() {
  const [userState, setUserState] = React.useState({
    status: "idle",
    user: null,
  });

  const getUser = async (username) => {
    setUserState({ ...userState, status: "pending" });

    try {
      const data = await getUserAPI(username);
      setUserState({ status: "resolved", user: data });
    } catch (error) {
      setUserState({ status: "rejected", user: null });
      console.error(error);
    }
  };

  return (
    <div className="search-wrapper">
      <SearchInput onSubmit={getUser} />
      <SearchResult userState={userState} />
    </div>
  );
}

export default App;
