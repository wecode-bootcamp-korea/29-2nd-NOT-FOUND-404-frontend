import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageNum from './PageNum';
import ProductLists from './ProductLists';
import ProductListTable from './ProductListTable';
import theme from '../../../../styles/theme';

function Product() {
  return (
    <ProductPage>
      <Wrapper>
        <Top>
          <Title>상품</Title>
          <Edit>
            <Link to="/creator/mypage/edit">+ 상품 만들기</Link>
          </Edit>
        </Top>
        <Header>
          <Seartch type="text" placeholder="상품명 검색" />
        </Header>
        <ProductListTable />
        <ProductLists />
        <ProductLists />
        <ProductLists />
        <Bottom>
          <PageNum />
        </Bottom>
      </Wrapper>
    </ProductPage>
  );
}

export default Product;

const ProductPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1230px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px 24px;
`;

const Edit = styled.button`
  width: 102px;
  height: 38px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  border-radius: 2px;
  background-color: ${theme.orange};

  &:hover {
    background-color: #f63006;
  }
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1230px;
  height: 66px;
  border-top: 1px solid #efefef;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  border-radius: 10px 10px 0px 0px;
`;

const Seartch = styled.input`
  position: absolute;
  padding: 10px 16px;
  width: 1198px;
  height: 40px;
  background-color: #f8f8f8;
  border: none;

  &::placeholder {
    color: #a2a2a2;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1230px;
  height: 78px;
  border-left: 1px solid #efefef;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  border-radius: 0px 0px 10px 10px;
`;
