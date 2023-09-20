import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Albums from './pages/Albums';

export default function App({allAlbums}) {
   return (
      <div className="container">
         <Routes> <Route
          path="/albums"
          element={<Albums allAlbums={allAlbums} />}
        /></Routes>
      </div>
    );
}
