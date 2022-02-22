import React from 'react';
import styled from 'styled-components';
import CreatorSideBar from './CreatorSideBar/CreatorSideBar';
import Notice from './Notice/Notice';
import Product from './Product/Product';

function CreatorMypage() {
  return (
    <div>
      <CreatorSideBar />
      <MyPageWrap>
        <SideBarBox />
        <Wrapper>
          <Product />
          {/* <Notice /> */}
        </Wrapper>
      </MyPageWrap>
    </div>
  );
}

export default CreatorMypage;

const SideBarBox = styled.div`
  width: 239px;
`;

const MyPageWrap = styled.section`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.section`
  padding: 30px 0px 32px 0px;
`;
