import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PRODUCT_DATA } from './PRODUCT_DATA';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductsWrap = () => {
  const AssmentComponent = ({ url, name }) => {
    return (
      <AssessmentIndividual>
        <AssessmentIcon src={'/images/Search/' + url} />
        <AssessmentText>{name}</AssessmentText>
      </AssessmentIndividual>
    );
  };

  return (
    <>
      <SoldOutSoon>매진임박! 지금 신청하세요!</SoldOutSoon>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={4}
        navigation
      >
        <ProductWrap>
          {PRODUCT_DATA?.map(data => (
            <SwiperSlide key={data.id}>
              <ProductLinkWrap to={data.route_url}>
                <ProductTumWrap>
                  <ProductTum src={data.img_url} />
                  {data.coupon && (
                    <CouponWrap>
                      <CouponTxt>{data.coupon}</CouponTxt>
                    </CouponWrap>
                  )}
                </ProductTumWrap>
                <ClassInfoWrap>
                  <UserId>{data.user_id}</UserId>
                  <ClassTitle>{data.class_title}</ClassTitle>
                  <AssessmentWrap>
                    <AssmentComponent
                      name={data.class_heart}
                      url="/images/icon_gray_heart.png"
                    />
                    <AssmentComponent
                      name={data.class_like}
                      url="/images/icon_gray_like.png"
                    />
                  </AssessmentWrap>
                  <PriceWrap>
                    <Sale>{data.sale}</Sale>
                    <Price>월 {data.price}원</Price>
                    <Term>({data.term}개월)</Term>
                  </PriceWrap>
                </ClassInfoWrap>
              </ProductLinkWrap>
              <LikeIcon src="/images/icon_like_inactive.png" />
            </SwiperSlide>
          ))}
        </ProductWrap>
      </Swiper>
    </>
  );
};

export default ProductsWrap;

const ProductWrap = styled.div`
  display: flex;
`;

const ProductLinkWrap = styled(Link)`
  display: inline-block;
  width: 276px;
  height: 207px;
`;

const ProductTumWrap = styled.div`
  position: relative;
  display: inline-block;
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
  &:hover {
    transform: scale(1.1);
  }
`;

const LikeIcon = styled.img`
  position: absolute;
  width: 21px;
  height: 18px;
  top: 15px;
  right: 25px;
  object-fit: cover;
  cursor: pointer;
`;

const CouponWrap = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;

const CouponTxt = styled.span`
  border-radius: 2px;
  background-color: rgb(243, 33, 59);
  color: rgb(255, 255, 255);
  padding: 6px 8px;
  margin: 0px;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
`;

const ClassInfoWrap = styled.div``;

const UserId = styled.p`
  margin: 8px 0;
  padding: 0;
  border: 0;
  color: #000000;
  font-size: 0.6875rem;
  line-height: 0.875rem;
  font-weight: 700;
`;

const ClassTitle = styled.h2`
  display: -webkit-box;
  color: rgb(26, 26, 26);
  height: 40px;
  margin: 4px 0px 8px;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  overflow: hidden;
`;

const AssessmentWrap = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid #f8f8f8;
  padding-bottom: 10px;
`;

const AssessmentIndividual = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin: 0px 8px 0px 0px;
  top: 10px;
  right: 10px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  -webkit-box-align: center;
`;

const AssessmentIcon = styled.img`
  width: 12px;
  height: 12px;
  object-fit: cover;
`;
const AssessmentText = styled.span`
  color: rgb(162, 162, 162);
  margin-left: 5px;
  font-size: 11px;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

const Sale = styled.span`
  color: #fd3049;
  margin: 0;
  padding: 0;
  border: 0;
  margin-right: 3px;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 700;
`;

const Price = styled.span`
  color: #1a1a1a;
  margin: 0;
  padding: 0;
  border: 0;
  margin-right: 3px;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 700;
`;

const Term = styled.span`
  color: #a2a2a2;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0.6875rem;
  line-height: 0.875rem;
  font-weight: 400;
`;

const SoldOutSoon = styled.div`
  padding: 0 0 20px 0px;
  font-weight: 600;
  font-size: 20px;
`;
