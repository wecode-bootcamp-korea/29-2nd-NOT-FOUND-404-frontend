import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Loding = () => {
  return (
    <Wrap>
      <Title>
        로그인 중입니다...
        <br />
        기다려주세요!
      </Title>
    </Wrap>
  );
};

const Wrap = styled.div`
  ${theme.flexCustom('center', 'center', 'column')};
  width: 100%;
  height: 85vh;
`;

const Title = styled.h2`
  color: #3a3a3a;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  line-height: 70px;
`;

export default Loding;
