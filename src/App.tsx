import React, { ReactElement } from "react";
import styled from "@emotion/styled";
import { getUserAPI } from "./lib/api";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import { User } from "./types";

const FinderWrapper = styled.div`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App(): ReactElement {
  const [userState, setUserState] = React.useState<{
    status: "idle" | "pending" | "resolved" | "rejected";
    user: User | null;
  }>({
    status: "idle",
    user: null,
  });

  const getUser = async (username: string) => {
    setUserState({ ...userState, status: "pending" });

    try {
      const data = await getUserAPI(username);
      console.log(`data`, data);

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
