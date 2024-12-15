import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import BackgroundOld from './components/BackgroundOld';
import Home from './pages/Home';
import Events from './pages/Events';
import MainBoard from './pages/MainBoard';
import ExecutiveBoard from './pages/ExecutiveBoard';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col font-inter bg-transparent text-white">
        <Background />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/board/main" element={<MainBoard />} />
            <Route path="/board/executive" element={<ExecutiveBoard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

