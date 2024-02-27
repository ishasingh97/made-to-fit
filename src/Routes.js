// Routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/measure" />} />
      <Route path="*" element={<App />} />
    </Routes>
  );
};

