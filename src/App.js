import React from "react";
import styled from "@emotion/styled";
import { getUserAPI } from "./lib/api";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";

const FinderWrapper = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <FinderWrapper>
      <SearchInput getUser={getUser} />
      <SearchResult userState={userState} />
    </FinderWrapper>
  );
}

export default App;
