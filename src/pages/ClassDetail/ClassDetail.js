import React from 'react';
import ClassThumbnails from './ClassThumbnails/ClassThumbnails';
import DetailMain from './DetailMain/DetailMain';
import DetailAside from './DetailAside/DetailAside';
import styled from 'styled-components';
import theme from '../../styles/theme';

const ClassDetail = () => {
  return (
    <StyledClassDetail theme={theme}>
      <ClassThumbnails />
      <DetailContainer>
        <DetailMain />
        <DetailAside />
      </DetailContainer>
    </StyledClassDetail>
  );
};

const DetailContainer = styled.div`
  display: flex;
  place-content: stretch space-between;
  padding-top: 24px;
`;

const StyledClassDetail = styled.div`
  max-width: calc(1176px + 64px);
  padding: 0 32px;
  margin: 0 auto;
`;

export default ClassDetail;
