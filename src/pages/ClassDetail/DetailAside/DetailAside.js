import React from 'react';
import styled from 'styled-components';
import useTopResize from './useTopResize';
import useWishlistToggle from './useWishlistToggle';
import { DETAIL_ASIDE } from './detailAsideData';
import theme, {
  StyledButton,
  SubTitle,
  NormalText,
} from '../../../styles/theme';

const DetailAside = ({ detailData, level }) => {
  const { asideRef, top } = useTopResize();
  const { heartClassName, heartColor, clickWishlist } = useWishlistToggle();

  const { creator_name, likes, price, subcategory, title } = detailData;

  return (
    <StyledDetailAside ref={asideRef}>
      <AsideContainer top={top}>
        <AsideWrapper>
          <ClassInfo>{`${subcategory} · ${creator_name}`}</ClassInfo>
          <Heading>{title}</Heading>
          <Gift>선물하기</Gift>
          <Status>바로 수강 가능</Status>

          <PriceSmall>쿠폰 적용 시, {5}개월 할부</PriceSmall>
          <PriceWrapper>
            <PriceName>쿠폰 할인가</PriceName>
            <DiscountRate>{30}%</DiscountRate>
            <Price>월 {price}원</Price>
          </PriceWrapper>
          <StyledHr />
          <PriceWrapper color={theme.red}>
            <PriceName>총 할인액</PriceName>
            <Price>-116,800원</Price>
          </PriceWrapper>
          <CouponButton>
            <span>할인쿠폰 받기</span>
            <img alt="할인쿠폰 받기" src="/images/icons/ic-download.png" />
          </CouponButton>

          <PromotionWrapper>
            {DETAIL_ASIDE.promotion.map(({ id, className, text }) => (
              <Promotion key={id}>
                <i className={className} />
                <span>{id === 3 ? level + text : text}</span>
              </Promotion>
            ))}
          </PromotionWrapper>

          <ButtonsWrapper>
            {DETAIL_ASIDE.button.map(({ id, className, text }) =>
              id === 1 ? (
                <GrayButton
                  key={id}
                  onClick={clickWishlist}
                  heartColor={heartColor}
                >
                  <i className={heartClassName} />
                  <span>{likes}</span>
                </GrayButton>
              ) : (
                <GrayButton key={id}>
                  <i className={className} />
                  <span>{text}</span>
                </GrayButton>
              )
            )}
          </ButtonsWrapper>

          <BuyButton>클래스 신청하기</BuyButton>
        </AsideWrapper>
      </AsideContainer>
    </StyledDetailAside>
  );
};

const StyledDetailAside = styled.div`
  position: static;
  width: calc(100% / 3);
  padding-left: 12px;
`;

const AsideContainer = styled.div`
  position: sticky;
  top: ${({ top }) => top || 0};
  max-height: 100vh;
  padding: 0 4px;
  overflow: auto;
`;

const AsideWrapper = styled.div`
  padding: 24px;
  margin-bottom: 12px;
  border: 1px solid ${theme.white};
  border-radius: 3px;
  background-color: ${theme.white};
  box-shadow: rgb(41 42 43 / 16%) 0px 2px 6px -2px;
`;

const AsideButton = styled(StyledButton)`
  ${theme.flexCustom('center', 'center')}
  width: 100%;

  & > span,
  & > i {
    flex: 0 0 auto;
  }
`;

const ClassInfo = styled.div`
  ${NormalText}
  margin-bottom: 4px;
`;

const Heading = styled.h2`
  ${SubTitle}
  margin-bottom: 8px;
  word-break: keep-all;
`;

const Status = styled.div`
  ${theme.flexCustom('center', 'center')}
  display: inline-flex;
  min-width: 24px;
  height: 24px;
  padding: 0 6px;
  margin-right: 4px;
  border-radius: 3px;
  background-color: ${theme.lightgray};
  color: ${theme.gray};
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;

const Gift = styled(Status)`
  color: ${theme.pinkred};
`;

const PriceSmall = styled.small`
  display: block;
  margin-bottom: 4px;
  color: ${theme.gray};
  text-align: right;
  font-size: 12px;
  line-height: 16px;
`;

const PriceWrapper = styled.div`
  ${theme.flexCustom('center', 'space-between')}
  color: ${({ color }) => color || theme.black};
  line-height: 24px;
`;

const DiscountRate = styled.div`
  flex-grow: 1;
  text-align: right;
  font-size: 16px;
  letter-spacing: -0.3px;
`;

const PriceName = styled.div`
  ${NormalText}
  font-weight: 500;
`;

const Price = styled.div`
  margin-left: 6px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.45px;
`;

const StyledHr = styled.hr`
  height: 1px;
  margin: 16px 0px;
  border: none;
  box-shadow: ${theme.lightgray} 0px -1px 0px inset;
`;

const CouponButton = styled(AsideButton)`
  margin: 16px 0;
  background-color: ${theme.red};
  color: ${theme.white};

  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
`;

const PromotionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px;
  border: 1px solid ${theme.lightgray} 0;
`;

const Promotion = styled.div`
  ${NormalText}
  width: 50%;
  margin-bottom: 20px;

  i {
    margin-right: 8px;
    font-size: 16px;
  }
`;

const ButtonsWrapper = styled.div`
  ${theme.flexCustom('center', 'space-between')}
  margin-bottom: 12px;
`;

const GrayButton = styled(AsideButton)`
  background-color: ${theme.lightgray};
  color: ${theme.black};

  i {
    margin-right: 4px;
    color: ${({ heartColor }) => heartColor || 'inherit'};
    font-size: 16px;
  }

  &:hover {
    background-color: ${theme.softgray};
  }

  &:not(:first-child, :last-child) {
    margin: 0 12px;
  }
`;

const BuyButton = styled(AsideButton)`
  height: 48px;
  padding: 0 20px;
  background-color: ${theme.orange};
  color: ${theme.white};
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background-color: ${theme.darkorange};
  }
`;

export default DetailAside;
