import React from 'react';
import styled from 'styled-components';
import CREATOR_SIDEBAR_DATA from './CreatorSideBarData';
import { Cate } from './Cate';
import theme from '../../../../styles/theme';

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
  background-color: #fff;
  border-right: 1px solid ${theme.palegray};
`;

const CategoryWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;
