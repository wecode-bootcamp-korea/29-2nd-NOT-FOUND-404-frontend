import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import CreatorMain from './pages/Creator/CreatorMain/CreatorMain';
import CreatorMypage from './pages/Creator/CreatorMypage/CreatorMypage';
import Edit from './pages/Creator/CreatorMypage/Product/Edit/Edit';
import Nav from './components/Nav/Nav';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<ProductsDetail />} />
        <Route path="/creator" element={<CreatorMain />} />
        <Route path="/creator/mypage" element={<CreatorMypage />} />
        <Route path="/creator/mypage/edit/*" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
