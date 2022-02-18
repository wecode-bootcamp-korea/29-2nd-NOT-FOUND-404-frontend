import React from 'react';
import styled from 'styled-components';
import NoticeBox from './NoticeBox';
import NoticeHeader from './NoticeHeader';
import NoticeNew from './NoticeNew';

function Notice() {
  return (
    <Warp>
      <NoticeHeader />
      {/* <NoticeBox /> */}
      <NoticeNew />
    </Warp>
  );
}

export default Notice;

const Warp = styled.section`
  padding-top: 40px;
  width: 545px;
`;
