import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getLanguages = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/languages`, { signal });
};

export const modifyLanguageById = (reqBody, languageId) =>
  axios.put(`${BASE_URL}/languages/${languageId}`, reqBody);

export const addLanguage = (reqBody) =>
  axios.post(`${BASE_URL}/languages/`, reqBody);
