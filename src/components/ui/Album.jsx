import React, { useState } from 'react';
import { Button, Card, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import EditIcon from './icons/EditIcon';
import DeleteIcon from './icons/DeleteIcon';
import SaveIcon from './icons/SaveIcon';

export default function Album({ user, album, deleteAlbumHandler, key }) {
  const [currentTitle, setCurrentTitle] = useState(album.title);
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: currentTitle,
  });

  const changeAlbumHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = (event) => {
    event.preventDefault();
    axios.patch(`api/edit/${album.id}`, formData).then(() => {
      setIsShowEdit(false);
      setCurrentTitle(formData.title);
    });
  };

  const clickForm = async () => {
    await axios.get(`/albums/${key}`);
    window.location = `/albums/${key}`;
  };

  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card style={{ width: '18rem' }} onClick={clickForm}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          {isShowEdit ? (
            <>
              <Form onSubmit={submitForm} className="mt-1">
                <Form.Control
                  value={formData.title}
                  type="text"
                  name="title"
                  autoComplete="off"
                  onChange={changeAlbumHandler}
                />
                <Form.Select
                  onChange={changeAlbumHandler}
                  aria-label="Default select example"
                  name="isOpen"
                >
                  <option>Выберите тип альбома</option>
                  <option value="true">Открытый альбом</option>
                  <option value="false">Закрытый альбом</option>
                </Form.Select>
              </Form>
              <Button onClick={submitForm} variant="outline-info" className="mt-2">
                <SaveIcon />
              </Button>
            </>
          ) : (
            <Card.Title>Card Title: {currentTitle}</Card.Title>
          )}
          <Card.Body>{album.User.name}</Card.Body>

          {album.userId === user.id ? (
            <>
              <Button
                variant="outline-danger"
                onClick={() => deleteAlbumHandler(album.id)}
                className="mt-2"
              >
                <DeleteIcon />
              </Button>
              <Button
                variant="outline-success"
                className="mt-2"
                onClick={() => setIsShowEdit(true)}
              >
                <EditIcon />
              </Button>
            </>
          ) : (
            false
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
