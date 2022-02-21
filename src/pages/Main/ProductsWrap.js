import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { api } from '../../config';
import useWishlist from '../../hooks/useWishlist';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProductsWrap = () => {
  const [products, setProducts] = useState();
  const [isOnWishlist, setIsOnWishlist] = useState(false);

  const { handleWishlist, LikeIconStyle } = useWishlist(
    isOnWishlist,
    setIsOnWishlist
  );

  useEffect(() => {
    fetch(api.product_list, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProducts(data.python_products));
  }, []);

  const AssmentComponent = ({ url, name }) => {
    return (
      <AssessmentIndividual>
        <AssessmentIcon src={'/images' + url} />
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
          {products?.map(data => (
            <SwiperSlide key={data.id}>
              <ProductLinkWrap to="/main">
                <ProductTumWrap>
                  <ProductTum src={data.image_url} />
                  <CouponWrap>
                    <CouponTxt>4만원 쿠폰</CouponTxt>
                  </CouponWrap>
                </ProductTumWrap>
                <ClassInfoWrap>
                  <UserId>{data.creator}</UserId>
                  <ClassTitle>{data.title}</ClassTitle>
                  <AssessmentWrap>
                    <AssmentComponent
                      name={data.class_heart}
                      url="/icon_gray_heart.png"
                    />
                    <AssmentComponent
                      name={data.class_like}
                      url="/icon_gray_like.png"
                    />
                  </AssessmentWrap>
                  <PriceWrap>
                    <Sale>{data.discount_rate}</Sale>
                    <Price>월 {data.price}원</Price>
                    <Term>({data.term}개월)</Term>
                  </PriceWrap>
                </ClassInfoWrap>
              </ProductLinkWrap>
              <LikeIconBtn onClick={() => handleWishlist(data.id)}>
                <LikeIconTxt className={LikeIconStyle.className} />
              </LikeIconBtn>
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

const LikeIconBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 20px;
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
  padding: 6px 8px;
  margin: 0px;
  border-radius: 2px;
  background-color: rgb(243, 33, 59);
  color: rgb(255, 255, 255);
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
  margin: 4px 0px 8px;
  color: rgb(26, 26, 26);
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  word-break: keep-all;
  overflow: hidden;
`;

const AssessmentWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #f8f8f8;
  padding-bottom: 10px;
`;

const AssessmentIndividual = styled.div`
  top: 10px;
  left: -5px;
  display: flex;
  justify-content: left;
  margin: 0 8px 0 0;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  -webkit-box-align: center;
`;

const AssessmentIcon = styled.img`
  width: 12px;
  height: 12px;
  object-fit: contain;
`;

const AssessmentText = styled.span`
  margin-left: 5px;
  color: rgb(162, 162, 162);
  font-size: 11px;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

const Sale = styled.span`
  margin: 0;
  margin-right: 3px;
  padding: 0;
  color: #fd3049;
  border: 0;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 700;
`;

const Price = styled.span`
  margin: 0;
  margin-right: 3px;
  padding: 0;
  color: #1a1a1a;
  border: 0;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 700;
`;

const Term = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  color: #a2a2a2;
  font-size: 0.6875rem;
  line-height: 0.875rem;
  font-weight: 400;
`;

const SoldOutSoon = styled.div`
  padding: 0 0 20px 0px;
  font-weight: 600;
  font-size: 20px;
`;
