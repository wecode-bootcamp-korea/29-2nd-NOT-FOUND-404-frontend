import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function EditSideBar() {
  return (
    <SideBarWarp>
      <CategoryWarp>
        <Link to="">
          <Category>
            <NumBox>0</NumBox>기본 정보
          </Category>
        </Link>
        <Link to="title-cover">
          <Category>
            <NumBox>1</NumBox>
            제목 및 커버
          </Category>
        </Link>
        <Link to="learn">
          <Category>
            <NumBox>2</NumBox>
            이런걸 배울 거에요
          </Category>
        </Link>
        <Link to="class-introduction">
          <Category>
            <NumBox>3</NumBox>
            클래스 소개
          </Category>
        </Link>
        <Link to="curriculum">
          <Category>
            <NumBox>4</NumBox>
            커리큘럼
          </Category>
        </Link>
        <Link to="creator-introduction">
          <Category>
            <NumBox>5</NumBox>
            크리에이터 소개
          </Category>
        </Link>
      </CategoryWarp>
    </SideBarWarp>
  );
}

export default EditSideBar;

const SideBarWarp = styled.section`
  position: fixed;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  border-right: 1px solid #f8f8f8;
  height: 100vh;
  background-color: #fff;
`;

const CategoryWarp = styled.section`
  position: absolute;
  top: 80px;
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

const Category = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px;
  position: relative;
  width: 248px;
  height: 48px;
  border-radius: 4px;
  font-weight: 500;
  color: #a2a2a2;
  letter-spacing: -1px;

  &:hover {
    background-color: #f8f8f8;
  }

  &:focus {
    background-color: #f8f8f8;
    color: black;
    font-weight: 700;
  }
`;
