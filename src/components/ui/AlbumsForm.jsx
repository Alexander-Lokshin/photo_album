import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default function AlbumsForm({ setCurrentAlbums }) {
  const [formData, setFormData] = useState({
    title: '',
    isOpen: '',
  });

  const changeAlbumHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      // Отправляем данные на сервер
      const response = await axios.post('/api/your-endpoint', formData);
      console.log(response.data);
      setCurrentAlbums((prev) => [response.data, ...prev]);
      // Обработка успешного ответа от сервера
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      // Обработка ошибки при отправке данных
      console.error('Error sending data:', error);
    }

    setFormData({ title: '', isOpen: '' }); // сбросить селект после отправки формы
  };




  return (
    <>
      {' '}
      <Form onSubmit={submitForm} className="mt-1" >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={formData.title}
            type="text"
            name="title"
            placeholder="Название альбома"
            autoComplete="off"
            onChange={changeAlbumHandler}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          name="isOpen"
          onChange={changeAlbumHandler}
        >
          <option>Выберите тип альбома</option>
          <option value="true">Открытый альбом</option>
          <option value="false">Закрытый альбом</option>
        </Form.Select>
        <Button variant="primary" type="submit" className="primary">
          send
        </Button>
      </Form>
    </>
  );
}
