import React from 'react';
import styled from 'styled-components';
import CREATOR_SIDEBAR_DATA from './CreatorSideBarData';
import { Cate } from './Cate';

function CreatorSideBar() {
  return (
    <Nav>
      <CategoryWrapper>
        {CREATOR_SIDEBAR_DATA.map(sidebar => {
          return <Cate key={sidebar.id} sidebar={sidebar} />;
        })}
      </CategoryWrapper>
    </Nav>
  );
}

export default CreatorSideBar;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 239px;
  height: 100vmin;
<<<<<<< HEAD
  background-color: #fff;
=======
>>>>>>> 2a245c0 (기능 수정)
  border-right: 1px solid #e5e5e5;
`;

const CategoryWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
