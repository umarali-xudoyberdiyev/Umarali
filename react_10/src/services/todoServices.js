import api from "../api/axios";

export const getTodos = () => {
  return api.get("/todos");
};

export const getTodo = (id) => {
  return api.get(`/todos/${id}`);
};

export const createTodo = (data) => {
  return api.post("/todos", data);
};

export const updateTodo = (id, data) => {
  return api.put(`/todos/${id}`, data);
};

export const deleteTodo = (id) => {
  return api.delete(`/todos/${id}`);
};
