import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';
import { api } from '../../config';

const Search = () => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetch(api.search, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSearchData(data);
      });
  }, []);

  const AssmentComponent = ({ url, name }) => {
    return (
      <AssessmentIndividual>
        <AssessmentIcon src={'/images/Search/' + url} />
        <AssessmentText>{name}</AssessmentText>
      </AssessmentIndividual>
    );
  };

  return (
    <Wrap>
      <ContentsWrap>
        <FillterWrap>
          {FILTER_MAIN_CATEGORY.map(({ id, name }) => (
            <FillterMapWrap key={id}>
              <FilterMain>
                <FilterMainTxt>{name}</FilterMainTxt>
                <ArrowDownIcon src="/images/Search/icon_down_arrow.png" />
              </FilterMain>
              {id === 1 &&
                FILTER_OPEN_TIME.map(({ id, name }) => (
                  <FilterMain key={id}>
                    <FilterMainTxt>{name}</FilterMainTxt>
                  </FilterMain>
                ))}
            </FillterMapWrap>
          ))}
        </FillterWrap>
        <ProductListWrap>
          {searchData.length === 0 ? (
            <NoneSearchWrap>
              <NoneSearchTitle>
                <NoneSearchValue>검색어 value가 들어갈 자리</NoneSearchValue>에
                대한 검색 결과가 없습니다.
              </NoneSearchTitle>
              <NoneSearchCheck>
                찾고자 하는 검색어를 확인하시고
                <br />
                다시 검색해 주세요
              </NoneSearchCheck>
            </NoneSearchWrap>
          ) : (
            <ProductWrap>
              {searchData?.map(product => (
                <Product key={product.id}>
                  <ProductLinkWrap to={product.route_url}>
                    <ProductTumWrap>
                      <ProductTum src={product.img_url} />
                      {product.coupon && (
                        <CouponWrap>
                          <CouponTxt>{product.coupon}</CouponTxt>
                        </CouponWrap>
                      )}
                    </ProductTumWrap>
                    <ClassInfoWrap>
                      <UserId>{product.user_id}</UserId>
                      <ClassTitle>{product.class_title}</ClassTitle>
                      <AssessmentWrap>
                        <AssmentComponent
                          name={product.class_heart}
                          url="icon_gray_heart.png"
                        />
                        <AssmentComponent
                          name={product.class_like}
                          url="icon_gray_like.png"
                        />
                      </AssessmentWrap>
                      <PriceWrap>
                        <Sale>{product.sale}</Sale>
                        <Price>월 {product.price}원</Price>
                        <Term>({product.term}개월)</Term>
                      </PriceWrap>
                    </ClassInfoWrap>
                  </ProductLinkWrap>
                  <LikeIcon src="/images/Search/icon_like_inactive.png" />
                </Product>
              ))}
            </ProductWrap>
          )}
          {searchData.length > 0 && (
            <PagenationWrap>
              <PageButtonInactive>
                <span>&#60;</span>
              </PageButtonInactive>
              <PageButtonInactive>
                <span>1</span>
              </PageButtonInactive>
              <PageButtonInactive>
                <span>&#62;</span>
              </PageButtonInactive>
            </PagenationWrap>
          )}
        </ProductListWrap>
      </ContentsWrap>
    </Wrap>
  );
};

export default Search;

const Wrap = styled.section`
  ${theme.flexCustom('center', 'center', 'column')};
  flex: 1 1 0%;
  width: 100%;
`;

const ContentsWrap = styled.div`
  position: relative;
  width: 1176px;
  min-height: 300px;
  padding-top: 24px;
  padding-bottom: 32px;
  overflow: unset;
`;

const FillterWrap = styled.div`
  display: flex;
  max-width: 1176px;
  margin-bottom: 24px;
`;

const FillterMapWrap = styled.div`
  display: flex;
`;

const FilterMain = styled.button`
  ${theme.flexCustom('center', 'center', 'row')};
  height: 40px;
  padding: 12px 16px;
  margin-right: 8px;
  color: ${theme.realblack};
  border: 1px solid ${theme.palegray};
  border-radius: 2px;
  font-weight: normal;
  font-size: 14px;
`;

const FilterMainTxt = styled.span`
  ${theme.flexCustom('center', 'center', 'column')};
  flex: 0 0 auto;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  color: ${theme.black};
`;

const ArrowDownIcon = styled.img`
  width: 9px;
  height: 9px;
  margin-left: 7px;
  object-fit: cover;
`;

const ProductListWrap = styled.div`
  flex: 1 1 0%;
  width: 100%;
  padding-bottom: 82px;
`;

const ProductWrap = styled.ul`
  ${theme.flexCustom('stretch', 'flex-start', 'row')};
  flex-wrap: wrap;
  margin: 0px -12px -32px;
  padding: 0px;
  list-style: none;
  -webkit-box-pack: start;
`;

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

const LikeIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 25px;
  width: 21px;
  height: 18px;
  object-fit: cover;
  cursor: pointer;
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
  height: 40px;
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

const AssessmentIndividual = styled.div`
  ${theme.flexCustom('center', 'flex-start', 'row')};
  margin: 0px 8px 0px 0px;
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
  margin-left: 5px;
  color: ${theme.gray};
  font-size: 11px;
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

const NoneSearchWrap = styled.div`
  ${theme.flexCustom('center', 'center', 'column')};
  width: 100%;
  height: 600px;
  -webkit-box-align: center;
}
`;

const NoneSearchTitle = styled.h2`
  margin-bottom: 10px;
  color: ${theme.black};
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: -0.45px;
`;

const NoneSearchValue = styled.strong`
  color: ${theme.orange};
`;

const NoneSearchCheck = styled.span`
  margin: 0px;
  color: ${theme.black};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  text-align: center;
`;

const PagenationWrap = styled.div`
  ${theme.flexCustom('center', 'center', 'row')};
  width: 100%;
  margin-top: 32px;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}
`;

const PageButtonInactive = styled.button`
  display: inline-flex;
  width: auto;
  align-items: center;
  height: 32px;
  margin: 5px;
  padding: 0px 12px;
  border-radius: 3px;
  color: #3a3a3a;
  background-color: ${theme.white};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  text-decoration-line: none;
  vertical-align: middle;
  transition: background-color 0.1s ease 0s;

  &:hover {
    background-color: #e6e6e6;
  }

  &:first-child {
    color: ${theme.black};
    background-color: ${theme.lightgray};

    &:hover {
      background-color: #e6e6e6;
    }
  }

  &:last-child {
    color: ${theme.black};
    background-color: rgb(248, 248, 248);

    &:hover {
      background-color: ${theme.lightgray};
    }
  }
`;

// 상수 데이터 : 필터 대분류
const FILTER_MAIN_CATEGORY = [
  {
    id: 1,
    name: '카테고리',
  },
  {
    id: 2,
    name: '클래스 종류',
  },
  {
    id: 3,
    name: '정확도순',
  },
];

// 상수 데이터 : 필터 오픈 시기별
const FILTER_OPEN_TIME = [
  {
    id: 1,
    name: '바로 수강',
  },
  {
    id: 2,
    name: '얼리버드',
  },
  {
    id: 3,
    name: '오픈 예정',
  },
];
