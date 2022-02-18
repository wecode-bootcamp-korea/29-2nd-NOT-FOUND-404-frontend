import React from 'react';
import styled from 'styled-components';

function CreatorMainItem({ data }) {
  return (
    <Wrapper>
      <ImgBox>
        <ItemImg src={data.image} />
      </ImgBox>
      <TextBox>
        <TextWrapper>
          <Title>{data.title}</Title>
          <Text>{data.contents}</Text>
        </TextWrapper>
      </TextBox>
    </Wrapper>
  );
}

export default CreatorMainItem;

const Wrapper = styled.section`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 632px;
  height: 236px;
  background-color: #f8f8f8;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 672px;
  height: 236px;
  background-color: #f8f8f8;
`;

const TextWrapper = styled.div`
  margin-left: 40px;
`;

const ItemImg = styled.img`
  width: 632px;
  height: 236px;
  object-fit: cover;
`;

const Title = styled.h5`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  white-space: pre-line;
`;

const Text = styled.p`
  line-height: 20px;
  color: #666666;
  white-space: pre-line;
`;
