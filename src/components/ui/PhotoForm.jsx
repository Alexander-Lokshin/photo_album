import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

export default function PostForm({ postSubmitHandler }) {
  const { albumId } = useParams();
  return (
    <Form onSubmit={(e) => postSubmitHandler(e, albumId)} className="mt-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" placeholder="description" autoComplete="off" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file" name="file" placeholder="img" />
      </Form.Group>
      <Button variant="primary" type="submit">
        send
      </Button>
    </Form>
  );
}
