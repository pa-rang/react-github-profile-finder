import React from "react";
import Loading from "./Loading";
import NoResult from "./NoResult";
import UserCard from "./UserCard";

function SearchResult({ userState }) {
  const { status, user } = userState;

  if (status === "pending") return <Loading />;
  if (status === "rejected") return <NoResult />;
  if (status === "idle") return <div />;

  return <UserCard user={user} />;
}

export default SearchResult;
