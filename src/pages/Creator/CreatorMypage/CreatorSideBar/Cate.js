import React, { useState } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import theme from '../../../../styles/theme';
=======
>>>>>>> 2a245c0 (기능 수정)
import SubCate from './SubCate';

export const Cate = ({ sidebar }) => {
  const [viewCate, setviewCate] = useState(false);

  const clickCate = () => {
    setviewCate(viewCate => !viewCate);
  };

  return (
<<<<<<< HEAD
    <>
      <Category onClick={clickCate} key={sidebar.id}>
        <Icon src={sidebar.icon} />
        {sidebar.cate}
        <Button
          className={viewCate ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
        />
      </Category>
=======
    <Category onClick={clickCate} key={sidebar.id}>
      <Icon src={sidebar.icon} />
      {sidebar.cate}
      <Button
        className={viewCate ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
      />
>>>>>>> 2a245c0 (기능 수정)
      <div hidden={!viewCate}>
        {sidebar.subcate.map((list, idx) => {
          return <SubCate key={idx} list={list} />;
        })}
      </div>
<<<<<<< HEAD
    </>
=======
    </Category>
>>>>>>> 2a245c0 (기능 수정)
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
<<<<<<< HEAD
    background-color: ${theme.lightgray};
=======
    background-color: #f8f8f8;
>>>>>>> 2a245c0 (기능 수정)
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
