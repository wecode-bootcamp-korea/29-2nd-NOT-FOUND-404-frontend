import React from 'react';
import ClassThumbnails from './ClassThumbnails/ClassThumbnails';
import DetailMain from './DetailMain/DetailMain';
import DetailAside from './DetailAside/DetailAside';
import useClassDetailData from './useClassDetailData';
import styled from 'styled-components';
import theme from '../../styles/theme';

const ClassDetail = () => {
  const { detailData, level } = useClassDetailData();

  return (
    <StyledClassDetail theme={theme}>
      <ClassThumbnails
        thumbnail={detailData.thumbnail}
        coverImg={detailData.cover_images}
      />
      <DetailContainer>
        <DetailMain detailData={detailData} level={level} />
        <DetailAside detailData={detailData} level={level} />
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
