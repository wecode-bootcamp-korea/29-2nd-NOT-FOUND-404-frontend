import React, { useState } from 'react';
import styled from 'styled-components';
import { CLASS_TIME } from './CLASS_TIME';
import { INFO_CLASSTYPE_DATA } from './INFO_CLASSTYPE_DATA';
import { LEVEL_DATA } from './LEVEL_DATA';
import { SUB_EXIST } from './SUB_EXIST';
import { CHOOSE_CATEG } from './CHOOSE_CATEG';
import Select from './Select';

const Selects = ({}) => {
  const [showCate, setShowCate] = useState('');

  const selectBrand = e => {
    setShowCate(e.target.value);
  };

  const Datas2 = [
    { data: LEVEL_DATA, text: '난이도' },
    { data: CLASS_TIME, text: '클래스 분량' },
    { data: SUB_EXIST, text: '자막 포함 여부' },
  ];

  return (
    <>
      <Select
        data={INFO_CLASSTYPE_DATA}
        brand="브랜드"
        selectBrand={selectBrand}
      />
      <Select data={CHOOSE_CATEG[showCate]} brand="카테고리" />

      <Text onChange={e => setInputInfo(e.target.value)}>가격</Text>
      <Input type="number" placeholder="가격을 입력해주세요." />

      {Datas2.map(data => (
        <Select data={data.data} brand={data.text} />
      ))}
    </>
  );
};

export default Selects;

const Input = styled.input`
  margin-bottom: 32px;
  padding: 0px 48px 0px 16px;
  width: 936px;
  height: 48px;
  border: 1px solid #efefef;
  border-radius: 3px;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    border: 1px solid #d7d7d7;
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: #cacaca;
  }
`;

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;
