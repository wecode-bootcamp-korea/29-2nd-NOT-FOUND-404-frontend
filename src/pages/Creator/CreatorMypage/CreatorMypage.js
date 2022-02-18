import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CreatorSideBar from './CreatorSideBar';
import Product from './Product/Product';

function CreatorMypage() {
  return (
    <MyPageWrap>
      <CreatorSideBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </Wrapper>
    </MyPageWrap>
  );
}

export default CreatorMypage;

const MyPageWrap = styled.section`
  display: grid;
  grid-template-columns: 1fr 9fr;
`;

const Wrapper = styled.section`
  margin: 30px 0px 32px 0px;
`;
