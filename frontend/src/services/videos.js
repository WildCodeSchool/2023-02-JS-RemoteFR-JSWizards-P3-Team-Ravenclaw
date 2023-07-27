import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getVideos = () => {
  const controller = new AbortController();
  const { signal } = controller;
  return axios.get(`${BASE_URL}/videos`, { signal });
};

export const getFavoriteVideos = (userId) => {
  const controller = new AbortController();
  const { signal } = controller;
  return axios.get(`${BASE_URL}/user-video/${userId}`, { signal });
};

export const modifyVideoById = (body, id) =>
  axios.put(`${BASE_URL}/videos/${id}`, body, {
    withCredentials: true,
  });

export const unfavoriteVideo = (videoId, userId) => {
  return axios.put(
    `${BASE_URL}/user-video/`,
    {
      user_id: userId,
      video_id: videoId,
      is_favorite: 0,
    },
    {
      withCredentials: true,
    }
  );
};

export const addVideoThumbnail = (form) =>
  axios.post(`${BASE_URL}/upload/thumbnails/videos`, form, {
    withCredentials: true,
  });

export const addVideoMedia = (form) =>
  axios.post(`${BASE_URL}/upload/videos`, form, {
    withCredentials: true,
  });

export const addVideo = (body) =>
  axios.post(`${BASE_URL}/videos/`, body, {
    withCredentials: true,
  });

export const deleteVideo = (id) =>
  axios.delete(`${BASE_URL}/videos/${id}`, {
    withCredentials: true,
  });

export const addVideoCategory = (body) =>
  axios.post(`${BASE_URL}/video-category/`, body, {
    withCredentials: true,
  });

export const deleteVideoCategory = (id) =>
  axios.delete(`${BASE_URL}/video-category/${id}`, {
    withCredentials: true,
  });

export const deleteVideoThumbnail = (data) =>
  axios.delete(`${BASE_URL}/upload/thumbnails/videos`, data, {
    withCredentials: true,
  });

export const deleteVideoFile = (data) =>
  axios.delete(`${BASE_URL}/upload/videos`, data, {
    withCredentials: true,
  });
