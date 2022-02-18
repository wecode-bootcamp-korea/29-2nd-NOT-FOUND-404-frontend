import React, { useState } from 'react';
import styled from 'styled-components';
import LearnBox from './LearnBox';
import Bottom from '../Bottom';
import theme from '../../../../../../styles/theme';

function Learn() {
  const Box = [1, 2, 3, 4, 5, 6];
  const [upLoadImg, setUpLoadImg] = useState('');
  const [files, setFiles] = useState({
    img: '',
  });

  const [values, setValues] = useState({});

  const saveData = e => {
    const formData = new FormData();
    formData.append('image', upLoadImg.img0);

    formData.append(
      'dataList',
      JSON.stringify({ title: values.title0, content: values.account0 })
    );

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
    <div>
      <Title>어떤 걸 알려주실 수 있나요?</Title>
      <Account>
        클래스를 통해 알려주실 것과 완성할 수 있는 것들을 설명해 주세요.
      </Account>
      <Warp>
        {Box.map(idx => {
          return (
            <LearnBox
              key={idx}
              files={files}
              setFiles={setFiles}
              values={values}
              setValues={setValues}
              index={idx}
              upLoadImg={upLoadImg}
              setUpLoadImg={setUpLoadImg}
            />
          );
        })}
      </Warp>
      <Bottom saveData={saveData} />
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
  color: ${theme.gray};
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

const Warp = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
