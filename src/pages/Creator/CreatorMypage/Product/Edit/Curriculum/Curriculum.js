import React from 'react';
import styled from 'styled-components';
import CurriculumInput from './CurriculumInput';

function Curriculum() {
  const curriculum = ['1', '2', '3', '4'];

  return (
    <section>
      <Title>클래스 커리큘럼을 작성해주세요</Title>
      <Account>
        클래스메이트들의 니즈를 정확하게 파악할 수 있는 4개의 구체적인 주제를
        선정해주세요.
      </Account>
      {curriculum.map((com, idx) => {
        return <CurriculumInput key={idx} com={com} />;
      })}
    </section>
  );
}

export default Curriculum;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1px;
`;

const Account = styled.p`
  margin-bottom: 32px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
  color: #a2a2a2;
`;
