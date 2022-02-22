import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useWishlist from '../../hooks/useWishlist';
import SearchAssessment from './SearchAssessment';
import styled from 'styled-components';
import theme from '../../styles/theme';

const SearchProduct = ({ props }) => {
  const { id, title, creator, price, discount_rate } = props;

  const [isOnWishlist, setIsOnWishlist] = useState(false);

  const { handleWishlist, LikeIconStyle } = useWishlist(
    isOnWishlist,
    setIsOnWishlist
  );

  return (
    <Product>
      <ProductLinkWrap to={`/products/${id}`}>
        <ProductTumWrap>
          <ProductTum />
          <CouponWrap>
            <CouponTxt>3만원 쿠폰</CouponTxt>
          </CouponWrap>
        </ProductTumWrap>
        <ClassInfoWrap>
          <UserId>{creator}</UserId>
          <ClassTitle>{title}</ClassTitle>
          <AssessmentWrap>
            <SearchAssessment name="5145" url="icon_gray_heart.png" />
            <SearchAssessment name="99%" url="icon_gray_like.png" />
          </AssessmentWrap>
          <PriceWrap>
            <Sale>{discount_rate}%</Sale>
            <Price>월 {price}원</Price>
            <Term>(5개월)</Term>
          </PriceWrap>
        </ClassInfoWrap>
      </ProductLinkWrap>
      <LikeIconBtn onClick={() => handleWishlist(id)}>
        <LikeIconTxt className={LikeIconStyle.className} />
      </LikeIconBtn>
    </Product>
  );
};

const Product = styled.li`
  position: relative;
  width: 25%;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
  margin-bottom: 32px;
  box-sizing: border-box;
}
`;

const ProductLinkWrap = styled(Link)`
  display: inline-block;
  width: 276px;
  height: 207px;
`;

const ProductTumWrap = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const ProductTum = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.3s ease 0s, opacity 0.1s linear 0s !important;

  &:hover{
    transform: scale(1.1);
  }
}
`;

const LikeIconBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 25px;
  width: 21px;
  height: 21px;
`;

const LikeIconTxt = styled.span`
  font-size: 21px;
`;

const CouponWrap = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;

const CouponTxt = styled.span`
  margin: 0px;
  padding: 6px 8px;
  background-color: ${theme.pinkred};
  color: ${theme.white};
  border-radius: 2px;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
`;

const ClassInfoWrap = styled.div`
  display: block;
  flex-direction: column;
`;

const UserId = styled.p`
  margin: 8px 0;
  padding: 0;
  border: 0;
  color: ${theme.realblack};
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 0.875rem;
`;

const ClassTitle = styled.h2`
  display: -webkit-box;
  height: auto;
  margin: 4px 0px 8px;
  color: ${theme.realblack};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  overflow: hidden;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const AssessmentWrap = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #f8f8f8;
`;

const PriceWrap = styled.div`
  ${theme.flexCustom('center', 'flex-start', 'row')};
  padding-top: 10px;
`;

const Sale = styled.span`
  margin-right: 3px;
  padding: 0;
  border: 0;
  color: ${theme.pinkred};
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 700;
`;

const Price = styled.span`
  margin-right: 3px;
  padding: 0;
  border: 0;
  color: ${theme.black};
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 700;
`;

const Term = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  color: ${theme.gray};
  font-size: 0.6875rem;
  line-height: 0.875rem;
  font-weight: 400;
`;

export default SearchProduct;
