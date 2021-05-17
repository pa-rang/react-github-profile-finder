import axios from "axios";
import { User } from "../types";

const client = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const getUserAPI = async (username: string): Promise<User> => {
  const { data } = await client.get<User>(username);

  return data;
};
