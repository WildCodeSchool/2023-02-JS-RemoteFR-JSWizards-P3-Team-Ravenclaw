import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getGames = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/games`, { signal });
};
