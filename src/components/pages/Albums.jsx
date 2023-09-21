import React, { useState } from 'react';
import axios from 'axios';
import AlbumsForm from '../ui/AlbumsForm'
import Album from '../ui/Album'


function Albums({allAlbums,user}) {
    const[currentAlbums, setCurrentAlbums] = useState(allAlbums || [])

    const deleteAlbumHandler = (id) => {
      axios.delete(`/api/delete/${id}`).then(()=> setCurrentAlbums((prev) => prev.filter((album) => album.id !== id))).catch(err=>console.log(err))
    }
  
  return (
    <div className='albums'>
        <AlbumsForm setCurrentAlbums={setCurrentAlbums}/>
        <div className='albums__cards'>
            {currentAlbums?.map((album) => <Album key={album.id} user={user} album={album} deleteAlbumHandler={deleteAlbumHandler}/>)}
        </div>
    </div>
  )
}

export default Albums