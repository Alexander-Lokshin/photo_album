import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function PostForm({ postSubmitHandler }) {
  return (
    <Form onSubmit={postSubmitHandler} className="mt-1">
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