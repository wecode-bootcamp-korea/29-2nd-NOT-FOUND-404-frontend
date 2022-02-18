import React from 'react';
import styled from 'styled-components';
import LearnBox from './LearnBox';

function Learn() {
  const Box = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Title>어떤 걸 알려주실 수 있나요?</Title>
      <Account>
        클래스를 통해 알려주실 것과 완성할 수 있는 것들을 설명해 주세요.
      </Account>
      <Warp>
        {Box.map(idx => {
          return <LearnBox key={idx} />;
        })}
      </Warp>
    </div>
  );
}

export default Learn;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -1px;
`;

const Account = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
  color: #a2a2a2;
`;

const Warp = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
