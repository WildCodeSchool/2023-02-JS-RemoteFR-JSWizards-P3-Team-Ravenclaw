import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getLanguages = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/languages`, { signal });
};

export const modifyLanguageById = (body, id) =>
  axios.put(`${BASE_URL}/languages/${id}`, body);

export const addLanguage = (body) => axios.post(`${BASE_URL}/languages/`, body);

export const deleteLanguage = (id) =>
  axios.delete(`${BASE_URL}/languages/${id}`);
