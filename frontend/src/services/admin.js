import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getStats = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/admin/stats`, { signal });
};

export const getVideos = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/admin/videos`, { signal });
};
