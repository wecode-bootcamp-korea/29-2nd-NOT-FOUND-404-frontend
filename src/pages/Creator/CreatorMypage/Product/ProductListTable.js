import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

function ProductListTable() {
  return (
    <div>
      <ProductList>
        <Row1Wrapper>
          <CheckBox type="checkbox" />
        </Row1Wrapper>
        <Row2Wrapper />
        <Row3Wrapper>
          <Text>제목</Text>
        </Row3Wrapper>
        <Row4Wrapper>
          <Text>상태</Text>
        </Row4Wrapper>
        <Row5Wrapper>
          <Text>상품군</Text>
        </Row5Wrapper>
        <Row6Wrapper>
          <Text>카테고리</Text>
        </Row6Wrapper>
        <Row7Wrapper>
          <Text>생성일</Text>
        </Row7Wrapper>
        <ButtonWrapper />
      </ProductList>
    </div>
  );
}

export default ProductListTable;

const ProductList = styled.div`
  display: flex;
  align-items: center;
  width: 1230px;
  height: 56px;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
`;

const CheckBox = styled.input`
  margin: 0px 10px;
  width: 20px;
  height: 20px;
  border: 2px solid ${theme.softgray};
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 700;
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
