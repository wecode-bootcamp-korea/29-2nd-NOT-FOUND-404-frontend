import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import CreatorIntroduction from './CreatorIntroduction/CreatorIntroduction';
import Curriculum from './Curriculum/Curriculum';
import EditHeader from './EditHeader/EditHeader';
import EditSideBar from './EditSideBar/EditSideBar';
import Information from './Information';
import Learn from './Learn/Learn';
import TitleCover from './TitleCover/TitleCover';
import Class from './Class/Class';
import theme from '../../../../../styles/theme';

function Edit() {
  return (
    <div>
      <Body>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Information />} />
            <Route path="/title-cover" element={<TitleCover />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/class-introduction" element={<Class />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route
              path="/creator-introduction"
              element={<CreatorIntroduction />}
            />
          </Routes>
        </Wrapper>
        <Bottom>
          <PrevBtn>이전</PrevBtn>
          <SaveBtn>저장하기</SaveBtn>
          <NextBtn>다음</NextBtn>
        </Bottom>
        <EditSideBar />
        <EditHeader />
      </Body>
    </div>
  );
}

export default Edit;

const Body = styled.section`
  &::selection {
    background: red;
    color: #fff;
  }
`;

const Bottom = styled.section`
  position: absolute;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  padding: 18px 32px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 76px;
  border-top: 1px solid #f8f8f8;
  background-color: #fff;
`;

const Wrapper = styled.section`
  position: absolute;
  padding: 32px 0px 92px;
  top: 80px;
  left: 400px;
`;

const SaveBtn = styled.button`
  width: 80px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  background-color: #f8f8f8;
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
  background-color: #f8f8f8;

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
