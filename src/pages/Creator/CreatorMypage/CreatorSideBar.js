import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import productIcon from '../img/product.svg';
import classIcon from '../img/class.svg';

function CreatorSideBar() {
  const [viewProduct, setviewProduct] = useState(true);
  const [viewClass, setviewClass] = useState(true);

  const clickProduct = () => {
    setviewProduct(!viewProduct);
  };

  const clickClass = () => {
    setviewClass(!viewClass);
  };

  return (
    <Nav>
      <CategoryWrapper>
        <Category className="main" onClick={clickProduct}>
          <Icon src={productIcon} />
          상품
          <Button
            className={
              viewProduct ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
            }
          />
        </Category>
        {viewProduct && (
          <>
            <Link to="">
              <SubCategory>전체상품</SubCategory>
            </Link>
            <Link to="community">
              <SubCategory>커뮤니티 관리</SubCategory>
            </Link>
          </>
        )}
        <Category className="main" onClick={clickClass}>
          <Icon src={classIcon} />
          클래스
          <Button
            className={
              viewProduct ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
            }
          />
        </Category>
        {viewClass && (
          <>
            <SubCategory>클래스 댓글</SubCategory>
            <SubCategory>클래스 소식</SubCategory>
          </>
        )}
      </CategoryWrapper>
    </Nav>
  );
}
export default CreatorSideBar;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 239px;
  height: 100vmin;
  border-right: 1px solid #e5e5e5;
`;

const CategoryWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  position: relative;
  width: 215px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const SubCategory = styled.button`
  padding: 12px 0px 12px 48px;
  position: relative;
  width: 215px;
  height: 44px;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #f8f8f8;
  }

  &:focus {
    background-color: #f8f8f8;
  }
`;

const Icon = styled.img`
  margin-right: 18px;
  width: 18px;
`;

const Button = styled.button`
  position: absolute;
  right: 12px;
  font-size: 14px;
`;
