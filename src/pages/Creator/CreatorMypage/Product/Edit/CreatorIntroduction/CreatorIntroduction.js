import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileUploadBox from './ProfileUploadBox';
import Bottom from '../Bottom';
import useError from '../useError';
import axios from 'axios';

function CreatorIntroduction() {
  const [values, setValues] = useState({
    nickname: '',
    introduction: '',
  });

  const { errors, mouseOut, handleChange, handleFormNext, color } = useError(
    values,
    setValues
  );

  const [files, setFiles] = useState('');

  const saveData = e => {
    const formdata = new FormData();
    formdata.append('img', files);
    formdata.append('nickname', '');
    formdata.append('introduction', '');

    const config = {
      Headers: {
        'content-type': 'mulipart/form-data',
      },
    };

    axios.post(`api`, formdata, config);
  };

  return (
    <section>
      <Title>본인을 소개해 주세요</Title>
      <ProfileWrap>
        <Text>프로필</Text>
        <ProfileUploadBox files={files} setFiles={setFiles} />
      </ProfileWrap>
      <Text>크리에이터 닉네임</Text>
      <Input
        name="nickname"
        placeholder="사용할 닉네임을 적어주세요"
        error={mouseOut}
        value={values.nickname}
        onBlur={handleFormNext}
        onChange={handleChange}
        color={color}
      />
      {mouseOut ? (
        <ErrorMsg>
          <ErrorIcon className="fa-solid fa-triangle-exclamation" />
          {errors.necessary}
        </ErrorMsg>
      ) : null}
      <Text top>크리에이터 소개</Text>
      <TextArea
        name="introduction"
        placeholder="크리에이터님이 어떤 분인지 소개해 주세요."
        error={mouseOut}
        value={values.introduction}
        onBlur={handleFormNext}
        onChange={handleChange}
      />
      {mouseOut ? (
        <ErrorMsg>
          <ErrorIcon className="fa-solid fa-triangle-exclamation" />
          {errors.necessary}
        </ErrorMsg>
      ) : null}
      <Bottom isLast={true} values={values} saveData={saveData} />
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
  margin-top: ${props => (props.top ? '32px' : '0px')};
  margin-bottom: 4px;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 20px;
`;

const Input = styled.input`
  margin-top: 8px;
  padding: ${props => (props.introduction ? '12px 16px' : '0px 16px')};
  width: 936px;
  height: ${props => (props.introduction ? '104px' : '48px')};
  border: 1px solid ${({ color }) => color.border};
  border-radius: 3px;

  &:hover {
    border: ${props =>
      props.error ? '1px solid #ff5252;' : '1px solid #d7d7d7'};
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
  border: 1px solid ${props => (props.error ? '#ff5252' : '#efefef')};
  border-radius: 3px;
  font-family: 'Noto Sans KR';
  letter-spacing: -0.5px;

  &::placeholder {
    color: #cacaca;
  }

  &:hover {
    border: ${props =>
      props.error ? '1px solid #ff5252;' : '1px solid #d7d7d7'};
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

const ErrorMsg = styled.p`
  margin-top: 10px;
  color: #ff5252;
  font-size: 11px;
  letter-spacing: -0.5px;
`;

const ErrorIcon = styled.i`
  margin-right: 4px;
`;
