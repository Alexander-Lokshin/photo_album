import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SignUpPage from './auth/SignUpPage';
import LogInPage from './auth/LogInPage';
import Albums from './pages/Albums';

export default function App({user,allAlbums}) {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route
          path="/albums"
          element={<Albums allAlbums={allAlbums} user={user} />}/>
      </Routes>
    </div>
  );
}
