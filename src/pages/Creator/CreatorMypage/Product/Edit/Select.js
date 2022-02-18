import React from 'react';
import styled from 'styled-components';

const Select = ({ data, brand, selectBrand }) => {
  let ph = '';
  if (brand === '브랜드') {
    ph += '브랜드를 선택해주세요';
  } else if (brand === '카테고리') {
    ph += '카테고리 선택해주세요';
  } else if (brand === '난이도') {
    ph += '난이도를 선택해주세요';
  } else if (brand === '클래스 분량') {
    ph += '시간을 선택해주세요';
  } else if (brand === '자막 포함 여부') {
    ph += '자막 포함 여부를 선택해주세요';
  }

  return (
    <div>
      <Text>{brand}</Text>
      <StyledSelect onChange={selectBrand}>
        <option hidden value="">
          {ph}
        </option>
        {data?.map((data, i) => {
          return (
            <option key={i} value={data}>
              {data}
            </option>
          );
        })}
      </StyledSelect>
    </div>
  );
};

const StyledSelect = styled.select`
  width: 936px;
  height: 48px;
  margin-bottom: 32px;
  padding: 0px 48px 0px 16px;
  border: 1px solid #efefef;
  border-radius: 3px;
  -webkit-appearance: none;

  &:hover {
    border: 1px solid #d7d7d7;
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

export default Select;
