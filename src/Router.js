import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ClassDetail from './pages/ClassDetail/ClassDetail';
import Nav from './components/Nav/Nav';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import Auth from './pages/Login/Auth';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/class/:classId" element={<ClassDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
