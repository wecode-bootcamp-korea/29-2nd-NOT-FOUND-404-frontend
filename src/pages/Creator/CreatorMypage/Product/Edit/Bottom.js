import React from 'react';
import styled from 'styled-components';
import theme from '../../../../../styles/theme';

function Bottom({ isFirst, isLast, values, saveData }) {
  const viewState = () => {};

  return (
    <div>
      <BottomWarp>
        {!isFirst && <PrevBtn>이전</PrevBtn>}
        <SaveBtn onClick={viewState} saveData={saveData}>
          저장하기
        </SaveBtn>
        {isLast ? <OpenBtn>오픈하기</OpenBtn> : <NextBtn>다음</NextBtn>}
      </BottomWarp>
    </div>
  );
}

export default Bottom;

const BottomWarp = styled.section`
  position: absolute;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  padding: 18px 32px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 76px;
  border-top: 1px solid ${theme.lightgray};
  background-color: #fff;
`;

const SaveBtn = styled.button`
  width: 80px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${theme.lightgray};
  text-align: center;
  letter-spacing: -0.5px;
  border-radius: 4px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const PrevBtn = styled.button`
  position: absolute;
  left: 300px;
  margin: 0px 8px;
  width: 55px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: center;
  border-radius: 4px;
  background-color: ${theme.lightgray};

  &:hover {
    background-color: #dfdfdf;
  }
`;

const NextBtn = styled.button`
  margin: 0px 8px;
  width: 55px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  background-color: ${theme.orange};

  &:hover {
    background-color: #cc4500;
  }
`;

const OpenBtn = styled.button`
  margin: 0px 8px;
  width: 76px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  background-color: ${theme.orange};

  &:hover {
    background-color: #cc4500;
  }
`;
