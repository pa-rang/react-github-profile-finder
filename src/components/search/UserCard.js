import styled from "@emotion/styled";
import React from "react";

const CardWrapper = styled.div`
  background-color: #2c3035;
  border-radius: 20px;
  box-shadow: rgba(23, 25, 29, 0.3) 0 2px 20px;
  display: flex;
  padding: 3rem;
  max-width: 800px;

  & > img {
    border: 10px solid #646568;
    border-radius: 50%;
    height: 180px;
    width: 180px;
  }

  & > div {
    color: #e5e6e7;
    margin-left: 2rem;

    h2 {
      margin-top: 0;
    }

    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      padding: 0;
      max-width: 400px;
    }
    & > div {
      li {
        display: flex;
        align-items: center;
        margin-right: 0.5rem;
      }
      strong {
        margin-right: 0.5rem;
      }
    }
  }
`;

const UserCard = ({ user }) => (
  <CardWrapper>
    <img src={user.avatar_url} alt={user.name} />
    <div>
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
  </CardWrapper>
);

export default UserCard;
