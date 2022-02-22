import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubCate = ({ list }) => {
  return (
    <Warp>
      <Link to="">
        <SubCategory>{list}</SubCategory>
      </Link>
    </Warp>
  );
};

const Warp = styled.div`
  width: 239px;
`;

const SubCategory = styled.button`
  position: relative;
  padding: 12px 0px 12px 32px;
  width: 215px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #f8f8f8;
  }

  &:focus {
    background-color: #f8f8f8;
  }
`;

export default SubCate;
