import React, { forwardRef } from 'react';
import styled from 'styled-components';
import theme, {
  ScrollMarginTop,
  Heading,
  NormalText,
} from '../../../../styles/theme';

const DetailRefundPolicy = forwardRef((props, ref) => {
  return (
    <StyledDetailRefundPolicy ref={refundRef => (ref.current[5] = refundRef)}>
      <Heading>환불 정책</Heading>
      <RefundInfo>
        {'환불 정책에 따라 구매일로부터 90일까지 환불 요청이 가능하며, '}
        <span>7일까지</span>
        {' 전액 환불이 가능합니다.'}
      </RefundInfo>
    </StyledDetailRefundPolicy>
  );
});

const StyledDetailRefundPolicy = styled.section`
  ${ScrollMarginTop}
  padding-bottom: 48px;
  border-bottom: 1px solid ${theme.lightgray};
`;

const RefundInfo = styled.div`
  ${NormalText}
  margin-top: 24px;
  padding: 24px;
  background-color: ${theme.lightgray};
  word-break: break-word;

  span {
    color: ${theme.orange};
  }
`;

export default DetailRefundPolicy;
