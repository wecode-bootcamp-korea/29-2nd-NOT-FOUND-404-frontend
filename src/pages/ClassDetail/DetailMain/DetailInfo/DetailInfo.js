import React from 'react';
import styled from 'styled-components';
import { DETAIL_INFO } from './detailInfoData';
import theme from '../../../../styles/theme';

const DetailInfo = () => {
  return (
    <StyledDetailInfo>
      <h2>클래스 정보</h2>
      <Info>
        {DETAIL_INFO.map(({ id, name, content }) => (
          <dl key={id}>
            <dt>{name}</dt>
            <dd>{content}</dd>
          </dl>
        ))}
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
