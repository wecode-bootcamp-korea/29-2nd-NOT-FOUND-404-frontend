import React from 'react';
import styled from 'styled-components';

function CreatorMainReview({ data }) {
  return (
    <div>
      {data && (
        <>
          <ReviewImg src={data.image} />
          <Title>{data.title}</Title>
          <Text>{data.contents}</Text>
        </>
      )}
    </div>
  );
}

export default CreatorMainReview;

const ReviewImg = styled.img`
  margin-bottom: 16px;
  width: 628px;
  height: 418px;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h6`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: -0.5px;
  white-space: pre-line;
`;

const Text = styled.p`
  line-height: 22px;
  color: #666666;
  letter-spacing: -0.5px;
  white-space: pre-line;
`;
