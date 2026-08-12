import api from "../api/axios";

export const getAlbums = () => {
  return api.get("/albums");
};

export const getAlbum = (id) => {
  return api.get(`/albums/${id}`);
};

export const createAlbum = (data) => {
  return api.post("/albums", data);
};

export const updateAlbum = (id, data) => {
  return api.put(`/albums/${id}`, data);
};

export const deleteAlbum = (id) => {
  return api.delete(`/albums/${id}`);
};
