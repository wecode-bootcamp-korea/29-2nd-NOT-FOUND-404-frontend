import React from 'react';
import styled from 'styled-components';
import CREATOR_SIDEBAR_LIST from './EditSideBarData';
import Category from './Category';

function EditSideBar() {
  return (
    <SideBarWarp>
      <CategoryWarp>
        {CREATOR_SIDEBAR_LIST.map(category => {
          return <Category key={category} cate={category} />;
        })}
      </CategoryWarp>
    </SideBarWarp>
  );
}

export default EditSideBar;

const SideBarWarp = styled.section`
  position: fixed;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  border-right: 1px solid #f8f8f8;
  height: 100vh;
  background-color: #fff;
`;

const CategoryWarp = styled.section`
  position: absolute;
  top: 80px;
`;
