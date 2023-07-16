import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getVideos = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/videos`, { signal });
};

export const modifyVideoById = (body, id) =>
  axios.put(`${BASE_URL}/videos/${id}`, body);

export const addVideoThumbnail = (form) =>
  axios.post(`${BASE_URL}/upload/thumbnails/videos`, form);

// To update
export const addVideoMedia = (form) =>
  axios.post(`${BASE_URL}/upload/videos`, form);

export const addVideo = (body) => axios.post(`${BASE_URL}/videos/`, body);

export const deleteVideo = (id) => axios.delete(`${BASE_URL}/videos/${id}`);
