import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

const SubCate = ({ list }) => {
  return (
    <SideBar>
      <Warp>
        <Link to="">
          <SubCategory>{list}</SubCategory>
        </Link>
      </Warp>
    </SideBar>
  );
};

const SideBar = styled.div`
  position: relative;
  width: 239px;
`;

const Warp = styled.div`
  display: flex;
  left: 0px;
  width: 239px;
  flex-direction: column;
  align-items: center;
`;

const SubCategory = styled.button`
  position: relative;
  padding: 12px 0px 12px 30px;
  width: 215px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: ${theme.lightgray};
  }

  &:focus {
    background-color: ${theme.lightgray};
  }
`;

export default SubCate;
