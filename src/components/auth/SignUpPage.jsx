import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', repeat: '',
  });

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeat) {
      alert('Passwords don\'t match');
      return;
    }
    const response = await axios.post('/api/auth/signup', formData);
    if (response.status === 200) {
      window.location = '/albums';
    }
  };

  return (
    <Form onSubmit={submitHandler} className="mt-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Repeat password</Form.Label>
        <Form.Control
          type="password"
          name="repeat"
          placeholder="Repeat your password"
          value={formData.repeat}
          onChange={changeHandler}
          isValid={formData.password === formData.repeat && formData.repeat !== ''}
          isInvalid={formData.password !== formData.repeat}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
  );
}
