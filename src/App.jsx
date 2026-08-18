import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StitchBackground from './components/StitchBackground';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactButton from './components/FloatingContactButton';
import SkipLink from './components/SkipLink';
import PageLoader from './components/PageLoader';
import PageTransition from './components/PageTransition';
import { PageReadyProvider } from './components/PageReadyContext';

// Home stays eager (first paint / LCP route). The rest are code-split so
// visitors only download the JS for the page they actually open.
import Home from './pages/Home';
// Equipo oculto de momento
// const Team = lazy(() => import('./pages/Team'));
const Services = lazy(() => import('./pages/Services'));
const Marketing = lazy(() => import('./pages/Marketing'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Solutions = lazy(() => import('./pages/Solutions'));

function AppRoutes() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <PageReadyProvider>
      <div className="App min-h-screen bg-background">
        <ScrollToTop />
        <ScrollProgress />
        {!isHome && <StitchBackground />}
        <SkipLink />
        <Navbar />
        <main id="main-content" className="relative z-10" tabIndex={-1}>
          <PageTransition>
            <Suspense fallback={<PageLoader />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                {/* Equipo oculto de momento */}
                {/* <Route path="/team" element={<Team />} /> */}
                <Route path="/services" element={<Services />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/soluciones" element={<Solutions />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </PageTransition>
        </main>
        <Footer />
        <FloatingContactButton />
      </div>
    </PageReadyProvider>
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
