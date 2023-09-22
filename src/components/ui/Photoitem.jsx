import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

export default function PostItem({
  photo, handleError, deletePostHandler, user
}) {
  const { albumId } = useParams();
  console.log('from params: ', albumId);

 

  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card>
        <Card.Img
          style={{ height: '300px', objectFit: 'cover' }}
          variant="top"
          src={`/img/${photo.fullname}`}
          onError={handleError}
        />
        <Card.Body>
          <Card.Text>{photo.description}</Card.Text>
        </Card.Body>
      </Card>
      <Col className="d-flex justify-content-between align-items-end">
        {photo.Album.userId === user?.id && (
          <Button
            variant="danger"
            onClick={() => deletePostHandler(photo.id)}
            className="mt-2"
          >
            Delete
          </Button>
        )}
      </Col>
    </Col>
  );
}
