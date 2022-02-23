import React from 'react';
import styled from 'styled-components';
import ImgUploadBox from './ImgUploadBox';
import ThumbnailUpload from './ThumbnailUpload';
import Bottom from '../Bottom';

function TitleCover() {
  const imgArry = [1, 2, 3, 4];

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
          <Tip>
            <Text bold>어떤 사진이 좋을지 고민이신가요?</Text>
            <Text>
              이미지는 세로형이 아닌 가로형을 권장합니다. 클래스 커버는
              수강생분들에게 <br />
              제일 먼저 노출되는 이미지입니다. 클래스의 장점이 돋보일 수 있도록
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
      <Bottom />
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

const Tip = styled.div`
  margin-top: 24px;
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
