import React, { useState } from 'react';
import styled from 'styled-components';
import CurriculumInput from './CurriculumInput';
import Bottom from '../Bottom';
import theme from '../../../../../../styles/theme';

function Curriculum() {
  const curriculum = ['1', '2', '3', '4'];
  const [values, setValues] = useState({});

  const saveData = e => {
    const formData = new FormData();

    formData.append(JSON.stringify({ title: values }));

    fetch('http://54.165.180.52:8000/creators/class-detail/1', {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.laUV7-k5LNNxAxUajCXyjawCw9K2OinyQZMDzXKButY',
        // 'Content-Type': 'mulipart/form-data',
      },
      body: formData,
    });
  };

  return (
    <section>
      <Title>클래스 커리큘럼을 작성해주세요</Title>
      <Account>
        클래스메이트들의 니즈를 정확하게 파악할 수 있는 4개의 구체적인 주제를
        선정해주세요.
      </Account>
      {curriculum.map((com, idx) => {
        return (
          <CurriculumInput
            key={idx}
            com={com}
            values={values}
            setValues={setValues}
            idx={idx}
          />
        );
      })}
      <Bottom saveData={saveData} />
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
  color: ${theme.gray};
`;
