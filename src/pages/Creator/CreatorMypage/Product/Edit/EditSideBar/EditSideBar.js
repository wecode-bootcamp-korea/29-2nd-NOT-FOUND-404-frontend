import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import CREATOR_SIDEBAR_LIST from './EditSideBarData';
import Category from './Category';
import styled from 'styled-components';

function EditSideBar() {
  const navigate = useNavigate();

  const [cateActive, setCateActive] = useState(
    Array(CREATOR_SIDEBAR_LIST.length).fill(false)
  );
  const btnActiveHandler = (id, link) => {
    const activeCheck = cateActive.map((el, index) => {
      return index === id - 1;
    });

    setCateActive(activeCheck);

    navigate(link);
  };

  return (
    <SideBarWarp>
      <CategoryWarp>
        {CREATOR_SIDEBAR_LIST.map(category => {
          return (
            <Category
              key={category}
              cate={category}
              btnActiveHandler={btnActiveHandler}
              cateActive={cateActive}
            />
          );
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
