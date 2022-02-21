import React from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

const DetailInfo = ({ duration, subtitle }) => {
  return (
    <StyledDetailInfo>
      <h2>클래스 정보</h2>
      <Info>
        <dl>
          <dt>클래스 분량</dt>
          <dd>{duration}시간</dd>
        </dl>
        <dl>
          <dt>수강 가능일</dt>
          <dd>바로 수강 가능</dd>
        </dl>
        <dl>
          <dt>자막 포함 여부</dt>
          <dd>{subtitle}</dd>
        </dl>
      </Info>
    </StyledDetailInfo>
  );
};

const StyledDetailInfo = styled.section`
  padding: 40px 0;
  border-bottom: 1px solid ${theme.lightgray};

  h2 {
    margin-bottom: 16px;
    color: ${theme.realblack};
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: -0.3px;
  }
`;

const Info = styled.div`
  display: flex;

  dl {
    display: flex;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.15px;

    dt {
      margin-right: 12px;
      color: ${theme.gray};
    }

    dd {
      margin-right: 48px;
      color: ${theme.black};
    }
  }
`;

export default DetailInfo;
