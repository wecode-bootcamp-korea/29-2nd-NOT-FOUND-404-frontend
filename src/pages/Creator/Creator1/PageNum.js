import React from 'react';
import styled from 'styled-components';

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
  border-radius: 100%;
  background-color: ${props => props.theme.orange};
  color: #fff;
`;
