import axios from "axios";
import { apiUrl, apiKey } from "./config";

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": apiKey,
  },
});
export const getUsers = () => api.get("/users");
export const getUserById = (id) => api.get(`/users/${id}`);
export const createUser = (data) => api.post("/users", data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);
