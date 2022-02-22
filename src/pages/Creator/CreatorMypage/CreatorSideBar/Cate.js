import React, { useState } from 'react';
import styled from 'styled-components';
import SubCate from './SubCate';

export const Cate = ({ sidebar }) => {
  const [viewCate, setviewCate] = useState(false);

  const clickCate = () => {
    setviewCate(viewCate => !viewCate);
  };

  return (
    <Category onClick={clickCate} key={sidebar.id}>
      <Icon src={sidebar.icon} />
      {sidebar.cate}
      <Button
        className={viewCate ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
      />
      <div hidden={!viewCate}>
        {sidebar.subcate.map((list, idx) => {
          return <SubCate key={idx} list={list} />;
        })}
      </div>
    </Category>
  );
};

const Category = styled.button`
  padding: 12px;
  position: relative;
  width: 215px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const Icon = styled.img`
  margin-right: 18px;
  width: 18px;
`;

const Button = styled.button`
  position: absolute;
  right: 12px;
  font-size: 14px;
`;
