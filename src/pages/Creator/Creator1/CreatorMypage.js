import React from 'react';
import styled from 'styled-components';
import CreatorSideBar from './CreatorSideBar';
import Product from './Product/Product';

function CreatorMypage() {
  return (
    <MyPageWrap>
      <CreatorSideBar />
      <Wrapper>
        <Product />
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
  margin-top: 30px;
`;
