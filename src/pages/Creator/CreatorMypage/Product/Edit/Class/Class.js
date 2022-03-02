import React, { useState } from 'react';
import styled from 'styled-components';
import MarkDown from './MarkDown';
import Bottom from '../Bottom';
import theme from '../../../../../../styles/theme';

function Class() {
  const [data, setData] = useState();
  const [getContent, setGetContent] = useState();

  const saveData = () => {
    fetch('http://54.165.180.52:8000/creators/creating/1', {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.laUV7-k5LNNxAxUajCXyjawCw9K2OinyQZMDzXKButY',
      },
      body: JSON.stringify({
        description: getContent,
      }),
    })
      .then(res => res.json)
      .then(res => console.log(res));
  };

  return (
    <div>
      <Title>클래스를 소개해주세요</Title>
      <Account>
        내 클래스를 표현한다면 어떤 단어가 좋을까요? 간단하지만 효과적으로
        클래스를 어필해보세요.
      </Account>
      <MarkDown data={data} setData={setData} setGetContent={setGetContent} />
      <Bottom saveData={saveData} />
    </div>
  );
}

export default Class;

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
  color: ${theme.gray};
`;
