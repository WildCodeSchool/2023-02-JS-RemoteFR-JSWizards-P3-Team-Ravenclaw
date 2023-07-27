import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getCategories = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/categories`, { signal });
};

export const modifyCategoryById = (body, id) =>
  axios.put(`${BASE_URL}/categories/${id}`, body, {
    withCredentials: true,
  });

export const addCategory = (body) =>
  axios.post(`${BASE_URL}/categories/`, body, {
    withCredentials: true,
  });

export const deleteCategory = (id) =>
  axios.delete(`${BASE_URL}/categories/${id}`, {
    withCredentials: true,
  });
