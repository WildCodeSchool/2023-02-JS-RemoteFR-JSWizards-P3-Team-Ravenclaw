import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getCategories = (controller) => {
  const { signal } = controller;
  return axios.get(`${BASE_URL}/categories`, { signal });
};

export const modifyCategoryById = (body, id) =>
  axios.put(`${BASE_URL}/categories/${id}`, body);

export const addCategory = (body) =>
  axios.post(`${BASE_URL}/categories/`, body);

export const deleteCategory = (id) =>
  axios.delete(`${BASE_URL}/categories/${id}`);
