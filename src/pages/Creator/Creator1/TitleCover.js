import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function TitleCover() {
  const [file, setFile] = useState({
    thumbnail: '',
    img_1: '',
    img_2: '',
    img_3: '',
    img_4: '',
  });

  const upLoadImg = e => {
    const { files, name } = e.target;
    setFile(prev => ({ ...prev, [name]: files }));
  };

  const handleClick = e => {
    const formdata = new FormData();
    formdata.append('uploadImage', file);
  };

  useEffect(() => {
    preview();
    return () => preview();
  });

  const preview = () => {
    if (!file.thumbnail) return false;
    if (file.thumbnail) {
      const imgEl = document.querySelector(ThumbnailBox);
      const reader = new FileReader();

      reader.onload = () =>
        (imgEl.style.backgroundImage = `url(${reader.result})`);

      reader.readAsDataURL(file.thumbnail[0]);
    }
    if (file.img_1) {
      const imgEl = document.querySelector(ImgBox);
      const reader = new FileReader();

      reader.onload = () =>
        (imgEl.style.backgroundImage = `url(${reader.result})`);

      reader.readAsDataURL(file.img_1[0]);
    }
    if (file.img_2) {
      const imgEl = document.querySelector(ImgBox);
      const reader = new FileReader();

      reader.onload = () =>
        (imgEl.style.backgroundImage = `url(${reader.result})`);

      reader.readAsDataURL(file.img_2[0]);
    }
    if (file.img_3) {
      const imgEl = document.querySelector(ImgBox);
      const reader = new FileReader();

      reader.onload = () =>
        (imgEl.style.backgroundImage = `url(${reader.result})`);

      reader.readAsDataURL(file.img_3[0]);
    }
    if (file.img_4) {
      const imgEl = document.querySelector(ImgBox);
      const reader = new FileReader();

      reader.onload = () =>
        (imgEl.style.backgroundImage = `url(${reader.result})`);

      reader.readAsDataURL(file.img_4[0]);
    }
  };

  return (
    <>
      <Title>
        클래스 커리큘럼 설문조사를 작성해주세요
        <br />
        제목과 이미지를 보여주세요
      </Title>
      <Account>
        감성적이면서도 클래스를 잘 표현하는 제목과 이미지를 등록해 주세요.
      </Account>
      <SectionA>
        <Left>
          <Text>썸네일</Text>
          <ThumbnailBox>
            <input
              type="file"
              accept="image/*"
              name="thumbnail"
              onChange={upLoadImg}
              onClick={handleClick}
            />
          </ThumbnailBox>
        </Left>
        <div>
          <Text>클래스 제목</Text>
          <Input type="text" />
          <Tip>
            <Text bold>어떤 사진과 제목이 좋을지 고민이신가요?</Text>
            <Text>제목은 감성적이면서도 직관적인 제목이 좋습니다.</Text>
            <Text>
              썸네일 이미지는 첫 인상을 결정해요. 세로형이 아닌 가로형 이미지에
              최적화돼있습니다.
            </Text>
            <Text>
              커버 이미지가 첫 인상을 결정해요. 클래스의 장점이 돋보일 수 있도록
              선정해주세요!
            </Text>
          </Tip>
        </div>
      </SectionA>
      <SectionB>
        <Text>커버 이미지</Text>
        <ImgBoxWrap>
          <ImgBox>
            <input
              type="file"
              accept="image/*"
              name="img_1"
              onChange={upLoadImg}
              onClick={handleClick}
            />
          </ImgBox>
          <ImgBox>
            <input
              type="file"
              accept="image/*"
              name="img_2"
              onChange={upLoadImg}
              onClick={handleClick}
            />
          </ImgBox>
          <ImgBox>
            <input
              type="file"
              accept="image/*"
              name="img_3"
              onChange={upLoadImg}
              onClick={handleClick}
            />
          </ImgBox>
          <ImgBox>
            <input
              type="file"
              accept="image/*"
              name="img_4"
              onChange={upLoadImg}
              onClick={handleClick}
            />
          </ImgBox>
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

const ThumbnailBox = styled.div`
  width: 294px;
  height: 220px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-position: center;
  background-size: cover;
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
  height: 140px;
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

const ImgBox = styled.div`
  margin: 0px 20px 20px 0px;
  width: 457px;
  height: 342.75px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-size: cover;
  background-position: center;
`;
