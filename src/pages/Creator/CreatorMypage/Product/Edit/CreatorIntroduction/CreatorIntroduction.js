import React from 'react';
import styled from 'styled-components';
import ProfileUploadBox from './ProfileUploadBox';

function CreatorIntroduction() {
  return (
    <section>
      <Title>본인을 소개해 주세요</Title>
      <ProfileWrap>
        <Text>프로필</Text>
        <ProfileUploadBox />
      </ProfileWrap>
      <Text>크리에이터 닉네임</Text>
      <Input placeholder="사용할 닉네임을 적어주세요" />
      <Text>크리에이터 소개</Text>
      <TextArea placeholder="크리에이터님이 어떤 분인지 소개해 주세요." />
    </section>
  );
}

export default CreatorIntroduction;

const ProfileWrap = styled.section`
  margin-bottom: 32px;
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1px;
`;

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

const Input = styled.input`
  margin-bottom: 32px;
  padding: ${props => (props.introduction ? '12px 16px' : '0px 16px')};
  width: 936px;
  height: ${props => (props.introduction ? '104px' : '48px')};
  border: 1px solid #efefef;
  border-radius: 3px;

  &:hover {
    border: 1px solid #d7d7d7;
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: #cacaca;
    position: ${props => (props.introduction ? 'absolute' : 'null')};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  margin-top: 8px;
  width: 936px;
  height: 104px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  font-family: 'Noto Sans KR';
  letter-spacing: -0.5px;

  &::placeholder {
    color: #cacaca;
  }

  &:hover {
    border: 1px solid #d7d7d7;
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;
