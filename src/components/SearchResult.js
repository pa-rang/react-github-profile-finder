import React from "react";
import UserCard from "./search/UserCard";
import Loading from "./search/Loading";
import NoResult from "./search/NoResult";

function SearchResult({ userState }) {
  const { status, user } = userState;

  switch (status) {
    case "pending":
      console.log("pending");
      return <Loading />;

    case "resolved":
      console.log("resolved");
      return <UserCard user={user} />;

    case "rejected":
      console.log("rejected");
      return <NoResult />;

    case "idle":
    default:
      return <div></div>;
  }
}

export default SearchResult;
