
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import './index.css';
import Contact from './components/ContactUs';

import CircularProgress from '@mui/material/CircularProgress';


// Lazy load other components
const Explore = lazy(() => import('./components/Explore'));
const Cart = lazy(() => import('./components/Cart'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const NotFound = lazy(() => import('./components/NotFound'));
const Footer = lazy(() => import('./components/Footer'));
const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!isHomePage && (
        <Suspense fallback={<CircularProgress />}>
          <Footer />
        </Suspense>
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

export default App;
