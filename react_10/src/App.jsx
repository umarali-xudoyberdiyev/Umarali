import React from "react";
import { useEffect, useState } from "react";

import { getUsers } from "./services/userServices";
import { getPosts } from "./services/postServices";
import { getComments } from "./services/commentServices";
import { getAlbums } from "./services/albumServices";
import { getPhotos } from "./services/photoServices";
import { getTodos } from "./services/todoServices";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));

    getPosts()
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));

    getComments()
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));

    getAlbums()
      .then((res) => setAlbums(res.data))
      .catch((error) => console.log(error));

    getPhotos()
      .then((res) => setPhotos(res.data))
      .catch((error) => console.log(error));

    getTodos()
      .then((res) => setTodos(res.data))
      .catch((error) => console.log(error));
  }, []);

  console.log({ users, posts, comments, albums, photos, todos });

  return (
    <div>
      <h1>Users: {users.length}</h1>
      <h1>Posts: {posts.length}</h1>
      <h1>Comments: {comments.length}</h1>
      <h1>Albums: {albums.length}</h1>
      <h1>Photos: {photos.length}</h1>
      <h1>Todos: {todos.length}</h1>
    </div>
  );
}

export default App;
