import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Packages from './pages/Packages';
import Work from './pages/Work';
import Templates from './pages/Templates';
import Blog from './pages/Blog';

function App() {
  
  return (
    <>
      <div className="min-h-screen w-full">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/'>
              <Route path='work' element={<Work />} />
              <Route path='packages' element={<Packages />} />
              <Route path='templates' element={<Templates />} />
              <Route path='blog' element={<Blog />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
