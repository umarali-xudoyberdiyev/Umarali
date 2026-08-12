import api from "../api/axios";

export const getPosts = () => {
  return api.get("/posts");
};

export const getPost = (id) => {
  return api.get(`/posts/${id}`);
};

export const createPost = (data) => {
  return api.post("/posts", data);
};

export const updatePost = (id, data) => {
  return api.put(`/posts/${id}`, data);
};

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};
