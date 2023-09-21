import React from 'react'
import { Button, Card} from 'react-bootstrap'

export default function Album({user, album, deleteAlbumHandler}) {

     


  return (
    <Card style={{ width: '18rem' }}>
 {/* <Card.Img variant="top" src="holder.js/100px180" /> */} 
 <Card.Body>
   <Card.Title>Card Title: {album.title}</Card.Title>
   <Card.Body>{album.User.name}</Card.Body>
   <Button variant="primary">Go somewhere</Button>
   {album.userId===user.id?
   <Button
            variant="danger"
             onClick={() => deleteAlbumHandler(album.id)}
            className="mt-2"
          >
            Delete
          </Button>:false}
 </Card.Body>
</Card>  
      
  )
}
