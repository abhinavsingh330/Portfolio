import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Membership from './components/Membership';
import Research from './components/Research';
import Events from './components/Events';
import Presentations from './components/Presentations';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Address from './components/Address';

const App = () => (
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/research" element={<Research />} />
            <Route path="/events" element={<Events />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/address" element={<Address />} />
        </Routes>
        <footer className="text-center py-4">
            <p>&copy; {new Date().getFullYear()} Abhinav Singh. All rights reserved.</p>
        </footer>
    </Router>
);

export default App;
