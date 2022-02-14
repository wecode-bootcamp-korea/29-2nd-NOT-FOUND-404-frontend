import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import Creator from './pages/Creator/Creator';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductsDetail />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
