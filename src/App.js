// --- App.js ---
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Home from './pages/Home';

import About from './pages/About';
import Courses from './pages/Courses';
import Testimonies from './pages/Testimonies';
import Ashram from './pages/Ashram';
import Research from './pages/Research';
import Contribution from './pages/Contribution';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/ashram" element={<Ashram />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
