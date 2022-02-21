import React from 'react';
import styled from 'styled-components';

function ProductLists() {
  return (
    <div>
      <ProductList>
        <Row1Wrapper>
          <CheckBox />
        </Row1Wrapper>
        <Row2Wrapper>
          <Thumbnail src="https://cdn.class101.net/images/c45a317b-f30d-41be-9f17-2950fa2b821e/640xauto" />
        </Row2Wrapper>
        <Row3Wrapper>
          <Text bold>상품명을 입력해주세요.</Text>
        </Row3Wrapper>
        <Row4Wrapper>
          <Condition />
          <Text>작성 중</Text>
        </Row4Wrapper>
        <Row5Wrapper>
          <Text>정규 클래스</Text>
        </Row5Wrapper>
        <Row6Wrapper>
          <Text>더 새로운 창업 · 부업</Text>
        </Row6Wrapper>
        <Row7Wrapper>
          <Text>2022. 2. 16. 오전 10:51</Text>
        </Row7Wrapper>
        <ButtonWrapper>
          <WriteButton>작성하기</WriteButton>
          <DeleteButton />
        </ButtonWrapper>
      </ProductList>
    </div>
  );
}

export default ProductLists;

const ProductList = styled.div`
  display: flex;
  align-items: center;
  width: 1230px;
  height: 72px;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #f8f8f8;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const CheckBox = styled.button`
  margin: 0px 10px;
  width: 20px;
  height: 20px;
  border: 2px solid #d7d7d7;
`;

const Thumbnail = styled.img`
  width: 56px;
  height: 42px;
  object-fit: cover;
`;

const Condition = styled.div`
  margin-right: 8px;
  width: 8px;
  height: 8px;
  background-color: #cacaca;
  border-radius: 100%;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: ${props => (props.bold ? 500 : 400)};
`;

const Row1Wrapper = styled.div`
  margin: 0px 14px;
  width: 40px;
`;

const Row2Wrapper = styled.div`
  padding: 24px 12px;
  width: 90px;
`;

const Row3Wrapper = styled.div`
  padding: 24px 12px;
  width: 220px;
`;

const Row4Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 12px;
  width: 150px;
`;

const Row5Wrapper = styled.div`
  padding: 24px 12px;
  width: 140px;
`;

const Row6Wrapper = styled.div`
  padding: 24px 12px;
  width: 200px;
`;

const Row7Wrapper = styled.div`
  padding: 24px 12px;
  width: 200px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 12px;
`;

const WriteButton = styled.button`
  margin-right: 8px;
  width: 74px;
  height: 38px;
  border: 1px solid #d7d7d7;
  border-radius: 2px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    background-color: #efefef;
  }
`;

const DeleteButton = styled.button`
  width: 40px;
  height: 38px;
  border: 1px solid #d7d7d7;
  border-radius: 2px;
  text-align: center;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    background-color: #efefef;
  }
`;
