import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';

function Category({ cate }) {
  return (
    <div>
      <Link to={`/creator/mypage/edit/${cate.link}`}>
        <Cate>
          <NumBox>{cate.number}</NumBox>
          {cate.cate}
        </Cate>
      </Link>
    </div>
  );
}

export default Category;

const Cate = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px;
  position: relative;
  width: 248px;
  height: 48px;
  border-radius: 4px;
  font-weight: 500;
  color: ${theme.gray};
  letter-spacing: -1px;

  &:hover {
    background-color: ${theme.lightgray};
  }

  &:focus {
    background-color: ${theme.lightgray};
    color: black;
    font-weight: 700;
  }
`;

const NumBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #efefef;
  font-size: 11px;

  &:focus {
    border: 1px solid black;
  }
`;
