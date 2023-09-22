import React from 'react';
import Row from 'react-bootstrap/Row';
import Photoform from '../ui/PhotoForm';
import Photoitem from '../ui/Photoitem';

import usePost from '../../customHooks/usePost';

export default function PhotoPage({ allUserPhotos, user }) {
  const { postSubmitHandler, allPhotos, handleError, deletePostHandler } = usePost(allUserPhotos);

  return (
    <>
      <Photoform postSubmitHandler={postSubmitHandler} />
      <Row className="mt-4">
        {allPhotos.map((photo) => (
          <Photoitem
            photo={photo}
            user={user}
            handleError={handleError}
            deletePostHandler={deletePostHandler}
          />
        ))}
      </Row>
    </>
  );
}
