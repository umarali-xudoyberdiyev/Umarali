import api from "../api/axios";

export const getPhotos = () => {
  return api.get("/photos");
};

export const getPhoto = (id) => {
  return api.get(`/photos/${id}`);
};

export const createPhoto = (data) => {
  return api.post("/photos", data);
};

export const updatePhoto = (id, data) => {
  return api.put(`/photos/${id}`, data);
};

export const deletePhoto = (id) => {
  return api.delete(`/photos/${id}`);
};
