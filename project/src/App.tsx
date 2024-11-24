import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Professionals from './pages/Professionals';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Toaster position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professionals" element={<Professionals />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;