import React from 'react'
import Layout from './Layout'
import Home from './components/P1 - home/home'
import Vision from './components/P2 - vision/vision'
import W3 from './components/P3 - w3/w3'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="vision" element={<Vision />} />
            <Route path="w3" element={<W3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

export default App;
