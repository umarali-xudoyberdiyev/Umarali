import api from "../api/axios";

export const getComments = () => {
  return api.get("/comments");
};

export const getComment = (id) => {
  return api.get(`/comments/${id}`);
};

export const createComment = (data) => {
  return api.post("/comments", data);
};

export const updateComment = (id, data) => {
  return api.put(`/comments/${id}`, data);
};

export const deleteComment = (id) => {
  return api.delete(`/comments/${id}`);
};
