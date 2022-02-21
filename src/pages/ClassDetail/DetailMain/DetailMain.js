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

const DetailMain = ({ detailData, level }) => {
  const scrollRef = useRef([]);

  const {
    creator_description,
    creator_image,
    creator_name,
    curriculum,
    description,
    duration,
    objects,
    subcategory,
    subtitle,
  } = detailData;

  return (
    <StyledDetailMain>
      <DetailNav scrollRef={scrollRef} />
      <DetailInfo duration={duration} subtitle={subtitle} />
      <DetailReview ref={scrollRef} />
      <DetailClassDescription
        ref={scrollRef}
        objects={objects}
        description={description}
        level={level}
        subcategory={subcategory}
        duration={duration}
      />
      <DetailCurriculum ref={scrollRef} curriculum={curriculum} />
      <DetailCreator
        ref={scrollRef}
        creator_name={creator_name}
        creator_image={creator_image}
        creator_description={creator_description}
      />
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
