import axios from "axios";

const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
const headers = {
  Authorization: `Bearer ${token}`,
};

export const api = axios.create({
  baseURL: "",
  headers,
});
