import React from 'react';
import styled from 'styled-components';
import ImgUploadBox from './ImgUploadBox';
import ThumbnailUpload from './ThumbnailUpload';

function TitleCover() {
  const imgArry = [1, 2, 3, 4];

  // const handleClick = e => {
  //   const formdata = new FormData();
  //   formdata.append('uploadImage', file);
  // };

  return (
    <>
      <Title>클래스 제목과 이미지를 보여주세요</Title>
      <Account>
        감성적이면서도 클래스를 잘 표현하는 제목과 이미지를 등록해 주세요.
      </Account>
      <SectionA>
        <Left>
          <Text>썸네일</Text>
          <ThumbnailUpload />
        </Left>
        <div>
          <Text>클래스 제목</Text>
          <Input type="text" />
          <Tip>
            <Text bold>어떤 사진과 제목이 좋을지 고민이신가요?</Text>
            <Text>
              제목은 감성적이면서도 직관적인 제목이 좋습니다. 이미지는 세로형이
              아닌
              <br />
              가로형 이미지에 최적화돼있습니다. 클래스의 장점이 돋보일 수 있도록
              선정해주세요!
            </Text>
          </Tip>
        </div>
      </SectionA>
      <SectionB>
        <Text>커버 이미지</Text>
        <ImgBoxWrap>
          {imgArry.map(idx => {
            return <ImgUploadBox key={idx} />;
          })}
        </ImgBoxWrap>
      </SectionB>
    </>
  );
}

export default TitleCover;

const Left = styled.section`
  margin-right: 40px;
`;

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

const Text = styled.p`
  margin-bottom: ${props => (props.bold ? '12px' : '4px')};
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
  font-weight: ${props => (props.bold ? 700 : 400)};
`;

const SectionA = styled.section`
  display: flex;
`;

const Input = styled.input`
  margin-bottom: 32px;
  padding: 0px 48px 0px 16px;
  width: 600px;
  height: 48px;
  border: 1px solid #efefef;
  border-radius: 3px;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    border: 1px solid #d7d7d7;
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: #cacaca;
  }
`;

const Tip = styled.div`
  background-color: #f8f8f8;
  width: 600px;
  height: 114px;
  border-radius: 3px;
  padding: 20px;
`;

const SectionB = styled.section`
  margin-top: 40px;
`;

const ImgBoxWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr); ;
`;
