import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function EditHeader() {
  return (
    <Header>
      <Wrap>
        <Text>상품 작성하기</Text>
        <Persent>0% 완료</Persent>
      </Wrap>
      <Button>
        <Link to="/creator/mypage">나가기</Link>
      </Button>
    </Header>
  );
}

export default EditHeader;

const Header = styled.header`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
  height: 72px;
  background-color: #fff;
  border-bottom: 1px solid #f8f8f8;
`;

const Wrap = styled.section`
  display: flex;
`;

const Text = styled.p`
  margin-right: 14px;
  letter-spacing: -1px;
`;

const Persent = styled.p`
  font-size: 14px;
  color: ${props => props.theme.orange};
  letter-spacing: -0.5px;
`;

const Button = styled.button`
  width: 68px;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 4px;
  letter-spacing: -0.5px;
  font-size: 14px;
  text-align: center;

  &:hover {
    background-color: #dfdfdf;
  }
`;
