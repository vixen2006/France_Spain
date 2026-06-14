import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UKPage from './pages/UKPage';
import SpainPage from './pages/SpainPage';
import FrancePage from './pages/FrancePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UKPage />} />
      <Route path="/spain" element={<SpainPage />} />
      <Route path="/france" element={<FrancePage />} />
    </Routes>
  );
}
