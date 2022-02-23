import React from 'react';
import styled from 'styled-components';
import Bottom from '../Bottom';
import Selects from './Selects';

function Information() {
  return (
    <InformationWarp>
      <Warp>
        <Title>어떤 클래스인지 알려주세요</Title>
        <Account>
          언젠가 이런 걸 가르쳐봐야지 생각해본 적이 있으신가요? 없음
          <br />
          간단히 크리에이터님이 알려 줄 수 있는 카테고리를 설정해봐요. 싫음d
          <br />
          모든 수정 사항은 즉시 저장되니 안심해 주세요. 거짓말
        </Account>
        <Selects />
      </Warp>
      <Bottom isFirst={true} />
    </InformationWarp>
  );
}

export default Information;

const InformationWarp = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Warp = styled.section``;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -1px;
`;

const Account = styled.p`
  margin-bottom: 32px;
  color: #a2a2a2;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;
