import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

function PageNum() {
  return (
    <div>
      <Num>1</Num>
    </div>
  );
}

export default PageNum;

const Num = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  color: #fff;
  border-radius: 100%;
  background-color: ${theme.orange};
`;
