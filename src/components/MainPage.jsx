import React from 'react'
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function MainPage() {
  return (
   <div className="mb-2" style={{}}>

   <Button onClick={() => {window.location = '/signup'}} variant="primary" size="lg">
     Зарегистрируйтесь
   </Button>{' '}
   <Button onClick={() => {window.location = '/login'}} variant="secondary" size="lg">
     Заходите
   </Button>
 </div>
  )
}
