import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StitchBackground from './components/StitchBackground';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactButton from './components/FloatingContactButton';
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Solutions from './pages/Solutions';

function AppRoutes() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="App min-h-screen bg-background">
      <ScrollToTop />
      <ScrollProgress />
      {!isHome && <StitchBackground />}
      <Navbar />
      <div key={location.pathname} className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/soluciones" element={<Solutions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
