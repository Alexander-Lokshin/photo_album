import React, { useState } from 'react';
import axios from 'axios';

export default function usePost(allUserPhotos) {
  const [allPhotos, setAllPhotos] = useState(allUserPhotos || []);

  const postSubmitHandler = (e) => {
    e.preventDefault();
    if (!e.target.description.value || !e.target.file.files[0]) return;
    const formData = new FormData();
    formData.append('description', e.target.description.value);
    formData.append('file', e.target.file.files[0]);
    e.target.reset();
    axios
      .post('/api/photos', formData)
      .then((res) => {
        setAllPhotos([...allUserPhotos, res.data]);
      })
      .catch((err) => console.log('----', err.response.data));
  };

  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = '/img/nofile.jpeg';
  };

  const deletePostHandler = (id) => {
    axios
      .delete(`/api/photos/${id}`)
      .then(() => {
        setAllPhotos((prev) => prev.filter((post) => post.id !== id));
      })
      .catch((err) => console.log(err.response.data));
  };

  return {
    postSubmitHandler,
    allPhotos,
    handleError,
    deletePostHandler,
  };
}
