import React, { useRef } from 'react';
import styled from 'styled-components';
import DetailNav from './DetailNav/DetailNav';
import DetailInfo from './DetailInfo/DetailInfo';
import DetailReview from './DetailReview/DetailReview';
import DetailClassDescription from './DetailClassDescription/DetailClassDescription';
import DetailCurriculum from './DetailCurriculum/DetailCurriculum';
import DetailCreator from './DetailCreator/DetailCreator';
import DetailCommunity from './DetailCommunity/DetailCommunity';
import DetailRefundPolicy from './DetailRefundPolicy/DetailRefundPolicy';

const DetailMain = () => {
  const scrollRef = useRef([]);

  return (
    <StyledDetailMain>
      <DetailNav scrollRef={scrollRef} />
      <DetailInfo />
      <DetailReview ref={scrollRef} />
      <DetailClassDescription ref={scrollRef} />
      <DetailCurriculum ref={scrollRef} />
      <DetailCreator ref={scrollRef} />
      <DetailCommunity ref={scrollRef} />
      <DetailRefundPolicy ref={scrollRef} />
    </StyledDetailMain>
  );
};

const StyledDetailMain = styled.div`
  width: calc(100% / 3 * 2);
  padding-right: 12px;
`;

export default DetailMain;
