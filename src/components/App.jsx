import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SignUpPage from './auth/SignUpPage';
import LogInPage from './auth/LogInPage';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </div>
  );
}
