import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getUsers = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/users`, { signal });
};

export const getStats = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/users/stats`, { signal });
};
