import React from "react";
import UserCard from "./search/UserCard";
import Loading from "./search/Loading";
import NoResult from "./search/NoResult";

function SearchResult({ userState }) {
  const { status, user } = userState;

  switch (status) {
    case "pending":
      return <Loading />;

    case "resolved":
      return <UserCard user={user} />;

    case "rejected":
      return <NoResult />;

    case "idle":
    default:
      return <div />;
  }
}

export default SearchResult;
