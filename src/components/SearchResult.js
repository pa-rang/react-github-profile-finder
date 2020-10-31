import React from "react";
import "../App.scss";

function SearchResult({ userState }) {
  const { status, user } = userState;

  const UserCard = () => (
    <div className="user-card">
      <img className="user-avatar" src={user.avatar_url} alt={user.name} />
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <ul className="user-info-list">
          <li>
            <strong>Followers</strong> {user.followers}
          </li>
          <li>
            <strong>Following</strong> {user.following}
          </li>
          <li>
            <strong>Repos</strong> {user.public_repos}
          </li>
        </ul>
      </div>
    </div>
  );

  switch (status) {
    case "pending":
      console.log("pending");
      return (
        <div style={{ color: "white", fontSize: "10rem" }}>Loading...</div>
      );

    case "resolved":
      console.log("resolved");
      return <UserCard />;

    case "rejected":
      console.log("rejected");
      return (
        <div style={{ color: "white", fontSize: "2rem" }}>
          그런 유저는 없어요. 다시 검색해보세요!
        </div>
      );

    case "idle":
    default:
      return <div></div>;
  }
}

export default SearchResult;
