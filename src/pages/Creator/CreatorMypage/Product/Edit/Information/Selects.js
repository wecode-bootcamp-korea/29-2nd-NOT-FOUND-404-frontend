import React, { useEffect, useState } from 'react';
import Select from './Select';
import styled from 'styled-components';
import { CLASS_TIME } from './CLASS_TIME';
import { INFO_CLASSTYPE_DATA } from './INFO_CLASSTYPE_DATA';
import { LEVEL_DATA } from './LEVEL_DATA';
import { SUB_EXIST } from './SUB_EXIST';
import { CHOOSE_CATEG } from './CHOOSE_CATEG';
import theme from '../../../../../../styles/theme';

const Selects = ({ valueCheck }) => {
  const [showCate, setShowCate] = useState('');
  const [checking, setChecking] = useState('');
  const [postData, setPostData] = useState('');

  const valueCheckHandler = event => {
    const { name, value } = event.target;

    setChecking({ ...checking, [name]: value ? true : false });
    setPostData({ ...postData, [name]: value });
    if (name === '브랜드') setShowCate(value);
  };

  useEffect(() => {
    const checkLen = Object.keys(checking).length === 7;
    const checkBoolean = Object.values(checking).every(
      (val, i, arr) => val === arr[0]
    );

    checkLen && checkBoolean
      ? valueCheck(true, postData)
      : valueCheck(false, postData);
  }, [checking]);

  console.log();

  return (
    <>
      <Select
        data={INFO_CLASSTYPE_DATA}
        brand="브랜드"
        valueCheckHandler={valueCheckHandler}
      />

      <Select
        data={CHOOSE_CATEG[showCate]}
        valueCheckHandler={valueCheckHandler}
        brand="카테고리"
      />

      <Text brand="클래스 제목">클래스 제목</Text>
      <Input
        type="text"
        placeholder="제목을 입력해주세요."
        onChange={valueCheckHandler}
        name="클래스 제목"
      />

      <Text brand="가격">가격</Text>
      <Input
        type="number"
        placeholder="가격을 입력해주세요."
        onChange={valueCheckHandler}
        name="가격"
      />

      {Datas2.map(data => (
        <Select
          key={data.id}
          data={data.data}
          brand={data.text}
          valueCheckHandler={valueCheckHandler}
        />
      ))}
    </>
  );
};

export default Selects;

const Datas2 = [
  { data: LEVEL_DATA, text: '난이도' },
  { data: CLASS_TIME, text: '클래스 분량' },
  { data: SUB_EXIST, text: '자막 포함 여부' },
];

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
    border: 1px solid ${theme.softgray};
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: ${theme.silvergray};
  }
`;

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;
