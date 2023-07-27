import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getGames = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/games`, { signal });
};

export const modifyGameById = (body, id) =>
  axios.put(`${BASE_URL}/games/${id}`, body, {
    withCredentials: true,
  });

export const addGameThumbnail = (form) => {
  return axios.post(`${BASE_URL}/upload/thumbnails/games`, form, {
    withCredentials: true,
  });
};

export const addGame = (body) =>
  axios.post(`${BASE_URL}/games`, body, {
    withCredentials: true,
  });

export const deleteGame = (id) =>
  axios.delete(`${BASE_URL}/games/${id}`, {
    withCredentials: true,
  });

export const deleteGameThumbnail = (data) =>
  axios.delete(`${BASE_URL}/upload/thumbnails/games`, data, {
    withCredentials: true,
  });
