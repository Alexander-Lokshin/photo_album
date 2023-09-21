import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBarPage({ user }) {
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await axios('/api/auth/logout');
    if (response.status === 200) window.location = '/';
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          Hello,
          {' '}
          {user.username}
        </Navbar.Brand>
        <Nav className="me-auto flex-grow-0">
             <Nav.Link href="#" onClick={logoutHandler}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}