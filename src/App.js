import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com/users/",
});

function App() {
  const [user, setUser] = React.useState(null);

  const getUserAPI = async (username) => {
    const { data } = await client.get(username);
    console.log("data", data);

    setUser(data);
  };

  React.useEffect(() => {
    getUserAPI("pa-rang");
  }, []);

  console.log("user", user);

  return (
    <>
      <SearchInput />
      <SearchResult />
    </>
  );
}

export default App;
