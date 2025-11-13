import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Packages from './pages/Packages';
import Work from './pages/Work';
import Templates from './pages/Templates';
import Blog from './pages/Blog';
import Footer from './components/Footer';

const ScrollToHash = () => {
    const { hash } = useLocation();
    useEffect(() => {
        if(!hash) return;
        const target = document.querySelector(hash);
        target?.scrollIntoView({ behavior: 'smooth' })
    }, [hash]);
    return null;
}

function App() {
  
  return (
    <>
      <div className="min-h-screen w-full">
        <BrowserRouter>
          <ScrollToHash />
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
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
