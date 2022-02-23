import React, { useState } from 'react';
import styled from 'styled-components';
import MarkDown from './MarkDown';
<<<<<<< HEAD:src/pages/Creator/CreatorMypage/Product/Edit/Class/Class.js
import Bottom from '../Bottom';
=======
>>>>>>> 2a245c0 (기능 수정):src/pages/Creator/CreatorMypage/Product/Edit/Class.js

function Class() {
  const [data, setData] = useState();

  return (
    <div>
      <Title>클래스를 소개해주세요</Title>
      <Account>
        내 클래스를 표현한다면 어떤 단어가 좋을까요? 간단하지만 효과적으로
        클래스를 어필해보세요.
      </Account>
<<<<<<< HEAD:src/pages/Creator/CreatorMypage/Product/Edit/Class/Class.js
      <MarkDown data={data} setData={setData} />
      <Bottom />
=======
      <MarkDown />
>>>>>>> 2a245c0 (기능 수정):src/pages/Creator/CreatorMypage/Product/Edit/Class.js
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
  color: #a2a2a2;
`;
